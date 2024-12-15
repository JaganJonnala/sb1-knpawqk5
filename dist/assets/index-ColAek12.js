import{r as R,a as Gg,g as Kg,R as Uh,u as gn,L as ke,b as Zg,O as Bh,c as Sa,N as Yg,d as Qg,f as Te,B as Jg}from"./vendor-Bhi9jb9L.js";import{q as xn,a as Li,_ as Oo}from"./ui-Dn8y2rc0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();var $h={exports:{}},Ra={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg=R,ey=Symbol.for("react.element"),ty=Symbol.for("react.fragment"),ny=Object.prototype.hasOwnProperty,ry=Xg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sy={key:!0,ref:!0,__self:!0,__source:!0};function qh(n,e,t){var r,s={},i=null,o=null;t!==void 0&&(i=""+t),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ny.call(e,r)&&!sy.hasOwnProperty(r)&&(s[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:ey,type:n,key:i,ref:o,props:s,_owner:ry.current}}Ra.Fragment=ty;Ra.jsx=qh;Ra.jsxs=qh;$h.exports=Ra;var d=$h.exports,rc={},zu=Gg;rc.createRoot=zu.createRoot,rc.hydrateRoot=zu.hydrateRoot;function iy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const ay=R.forwardRef(iy);function oy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"}))}const cy=R.forwardRef(oy);function ly({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"}))}const Hu=R.forwardRef(ly);function uy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"}))}const dy=R.forwardRef(uy);function hy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const fy=R.forwardRef(hy);function my({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"}))}const py=R.forwardRef(my);function gy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"}),R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const yy=R.forwardRef(gy);function _y({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}const vy=R.forwardRef(_y);function wy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"}))}const Ey=R.forwardRef(wy);function Ty({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))}const by=R.forwardRef(Ty);function Iy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))}const xy=R.forwardRef(Iy);function Ay({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))}const Sy=R.forwardRef(Ay);function Ry({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}const Wh=R.forwardRef(Ry);function ky({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"}))}const Ny=R.forwardRef(ky);function Py({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"}))}const Cy=R.forwardRef(Py);function Oy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const Dy=R.forwardRef(Oy);function jy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"}))}const Vy=R.forwardRef(jy);function My({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}))}const Ly=R.forwardRef(My);function Fy({title:n,titleId:e,...t},r){return R.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},t),n?R.createElement("title",{id:e},n):null,R.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const zh=R.forwardRef(Fy),Uy={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Gu=n=>{let e;const t=new Set,r=(m,g)=>{const w=typeof m=="function"?m(e):m;if(!Object.is(w,e)){const E=e;e=g??(typeof w!="object"||w===null)?w:Object.assign({},e,w),t.forEach(k=>k(e,E))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>h,subscribe:m=>(t.add(m),()=>t.delete(m)),destroy:()=>{(Uy?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),t.clear()}},h=e=n(r,s,l);return l},By=n=>n?Gu(n):Gu;var Hh={exports:{}},Gh={},Kh={exports:{}},Zh={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=R;function $y(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var qy=typeof Object.is=="function"?Object.is:$y,Wy=_r.useState,zy=_r.useEffect,Hy=_r.useLayoutEffect,Gy=_r.useDebugValue;function Ky(n,e){var t=e(),r=Wy({inst:{value:t,getSnapshot:e}}),s=r[0].inst,i=r[1];return Hy(function(){s.value=t,s.getSnapshot=e,Do(s)&&i({inst:s})},[n,t,e]),zy(function(){return Do(s)&&i({inst:s}),n(function(){Do(s)&&i({inst:s})})},[n]),Gy(t),t}function Do(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!qy(n,t)}catch{return!0}}function Zy(n,e){return e()}var Yy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Zy:Ky;Zh.useSyncExternalStore=_r.useSyncExternalStore!==void 0?_r.useSyncExternalStore:Yy;Kh.exports=Zh;var Qy=Kh.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=R,Jy=Qy;function Xy(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var e_=typeof Object.is=="function"?Object.is:Xy,t_=Jy.useSyncExternalStore,n_=ka.useRef,r_=ka.useEffect,s_=ka.useMemo,i_=ka.useDebugValue;Gh.useSyncExternalStoreWithSelector=function(n,e,t,r,s){var i=n_(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=s_(function(){function l(E){if(!h){if(h=!0,m=E,E=r(E),s!==void 0&&o.hasValue){var k=o.value;if(s(k,E))return g=k}return g=E}if(k=g,e_(m,E))return k;var N=r(E);return s!==void 0&&s(k,N)?k:(m=E,g=N)}var h=!1,m,g,w=t===void 0?null:t;return[function(){return l(e())},w===null?void 0:function(){return l(w())}]},[e,t,r,s]);var c=t_(n,i[0],i[1]);return r_(function(){o.hasValue=!0,o.value=c},[c]),i_(c),c};Hh.exports=Gh;var a_=Hh.exports;const o_=Kg(a_),Yh={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:c_}=Uh,{useSyncExternalStoreWithSelector:l_}=o_;let Ku=!1;const u_=n=>n;function d_(n,e=u_,t){(Yh?"production":void 0)!=="production"&&t&&!Ku&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),Ku=!0);const r=l_(n.subscribe,n.getState,n.getServerState||n.getInitialState,e,t);return c_(r),r}const h_=n=>{(Yh?"production":void 0)!=="production"&&typeof n!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof n=="function"?By(n):n,t=(r,s)=>d_(e,r,s);return Object.assign(t,e),t},f_=n=>h_,jo={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},sc=new Map,Ri=n=>{const e=sc.get(n);return e?Object.fromEntries(Object.entries(e.stores).map(([t,r])=>[t,r.getState()])):{}},m_=(n,e,t)=>{if(n===void 0)return{type:"untracked",connection:e.connect(t)};const r=sc.get(t.name);if(r)return{type:"tracked",store:n,...r};const s={connection:e.connect(t),stores:{}};return sc.set(t.name,s),{type:"tracked",store:n,...s}},p_=(n,e={})=>(t,r,s)=>{const{enabled:i,anonymousActionType:o,store:c,...l}=e;let h;try{h=(i??(jo?"production":void 0)!=="production")&&window.__REDUX_DEVTOOLS_EXTENSION__}catch{}if(!h)return(jo?"production":void 0)!=="production"&&i&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),n(t,r,s);const{connection:m,...g}=m_(c,h,l);let w=!0;s.setState=(N,C,F)=>{const j=t(N,C);if(!w)return j;const $=F===void 0?{type:o||"anonymous"}:typeof F=="string"?{type:F}:F;return c===void 0?(m==null||m.send($,r()),j):(m==null||m.send({...$,type:`${c}/${$.type}`},{...Ri(l.name),[c]:s.getState()}),j)};const E=(...N)=>{const C=w;w=!1,t(...N),w=C},k=n(s.setState,r,s);if(g.type==="untracked"?m==null||m.init(k):(g.stores[g.store]=s,m==null||m.init(Object.fromEntries(Object.entries(g.stores).map(([N,C])=>[N,N===g.store?k:C.getState()])))),s.dispatchFromDevtools&&typeof s.dispatch=="function"){let N=!1;const C=s.dispatch;s.dispatch=(...F)=>{(jo?"production":void 0)!=="production"&&F[0].type==="__setState"&&!N&&(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),N=!0),C(...F)}}return m.subscribe(N=>{var C;switch(N.type){case"ACTION":if(typeof N.payload!="string"){console.error("[zustand devtools middleware] Unsupported action format");return}return Vo(N.payload,F=>{if(F.type==="__setState"){if(c===void 0){E(F.state);return}Object.keys(F.state).length!==1&&console.error(`
                    [zustand devtools middleware] Unsupported __setState action format. 
                    When using 'store' option in devtools(), the 'state' should have only one key, which is a value of 'store' that was passed in devtools(),
                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }
                    `);const j=F.state[c];if(j==null)return;JSON.stringify(s.getState())!==JSON.stringify(j)&&E(j);return}s.dispatchFromDevtools&&typeof s.dispatch=="function"&&s.dispatch(F)});case"DISPATCH":switch(N.payload.type){case"RESET":return E(k),c===void 0?m==null?void 0:m.init(s.getState()):m==null?void 0:m.init(Ri(l.name));case"COMMIT":if(c===void 0){m==null||m.init(s.getState());return}return m==null?void 0:m.init(Ri(l.name));case"ROLLBACK":return Vo(N.state,F=>{if(c===void 0){E(F),m==null||m.init(s.getState());return}E(F[c]),m==null||m.init(Ri(l.name))});case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return Vo(N.state,F=>{if(c===void 0){E(F);return}JSON.stringify(s.getState())!==JSON.stringify(F[c])&&E(F[c])});case"IMPORT_STATE":{const{nextLiftedState:F}=N.payload,j=(C=F.computedStates.slice(-1)[0])==null?void 0:C.state;if(!j)return;E(c===void 0?j:j[c]),m==null||m.send(null,F);return}case"PAUSE_RECORDING":return w=!w}return}}),k},g_=p_,Vo=(n,e)=>{let t;try{t=JSON.parse(n)}catch(r){console.error("[zustand devtools middleware] Could not parse the received json",r)}t!==void 0&&e(t)};var Qh=Symbol.for("immer-nothing"),Zu=Symbol.for("immer-draftable"),Xe=Symbol.for("immer-state");function ct(n,...e){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var vr=Object.getPrototypeOf;function wr(n){return!!n&&!!n[Xe]}function Dn(n){var e;return n?Jh(n)||Array.isArray(n)||!!n[Zu]||!!((e=n.constructor)!=null&&e[Zu])||Pa(n)||Ca(n):!1}var y_=Object.prototype.constructor.toString();function Jh(n){if(!n||typeof n!="object")return!1;const e=vr(n);if(e===null)return!0;const t=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return t===Object?!0:typeof t=="function"&&Function.toString.call(t)===y_}function Zi(n,e){Na(n)===0?Reflect.ownKeys(n).forEach(t=>{e(t,n[t],n)}):n.forEach((t,r)=>e(r,t,n))}function Na(n){const e=n[Xe];return e?e.type_:Array.isArray(n)?1:Pa(n)?2:Ca(n)?3:0}function ic(n,e){return Na(n)===2?n.has(e):Object.prototype.hasOwnProperty.call(n,e)}function Xh(n,e,t){const r=Na(n);r===2?n.set(e,t):r===3?n.add(t):n[e]=t}function __(n,e){return n===e?n!==0||1/n===1/e:n!==n&&e!==e}function Pa(n){return n instanceof Map}function Ca(n){return n instanceof Set}function An(n){return n.copy_||n.base_}function ac(n,e){if(Pa(n))return new Map(n);if(Ca(n))return new Set(n);if(Array.isArray(n))return Array.prototype.slice.call(n);const t=Jh(n);if(e===!0||e==="class_only"&&!t){const r=Object.getOwnPropertyDescriptors(n);delete r[Xe];let s=Reflect.ownKeys(r);for(let i=0;i<s.length;i++){const o=s[i],c=r[o];c.writable===!1&&(c.writable=!0,c.configurable=!0),(c.get||c.set)&&(r[o]={configurable:!0,writable:!0,enumerable:c.enumerable,value:n[o]})}return Object.create(vr(n),r)}else{const r=vr(n);if(r!==null&&t)return{...n};const s=Object.create(r);return Object.assign(s,n)}}function Wc(n,e=!1){return Oa(n)||wr(n)||!Dn(n)||(Na(n)>1&&(n.set=n.add=n.clear=n.delete=v_),Object.freeze(n),e&&Object.entries(n).forEach(([t,r])=>Wc(r,!0))),n}function v_(){ct(2)}function Oa(n){return Object.isFrozen(n)}var w_={};function jn(n){const e=w_[n];return e||ct(0,n),e}var ws;function ef(){return ws}function E_(n,e){return{drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Yu(n,e){e&&(jn("Patches"),n.patches_=[],n.inversePatches_=[],n.patchListener_=e)}function oc(n){cc(n),n.drafts_.forEach(T_),n.drafts_=null}function cc(n){n===ws&&(ws=n.parent_)}function Qu(n){return ws=E_(ws,n)}function T_(n){const e=n[Xe];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Ju(n,e){e.unfinalizedDrafts_=e.drafts_.length;const t=e.drafts_[0];return n!==void 0&&n!==t?(t[Xe].modified_&&(oc(e),ct(4)),Dn(n)&&(n=Yi(e,n),e.parent_||Qi(e,n)),e.patches_&&jn("Patches").generateReplacementPatches_(t[Xe].base_,n,e.patches_,e.inversePatches_)):n=Yi(e,t,[]),oc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),n!==Qh?n:void 0}function Yi(n,e,t){if(Oa(e))return e;const r=e[Xe];if(!r)return Zi(e,(s,i)=>Xu(n,r,e,s,i,t)),e;if(r.scope_!==n)return e;if(!r.modified_)return Qi(n,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const s=r.copy_;let i=s,o=!1;r.type_===3&&(i=new Set(s),s.clear(),o=!0),Zi(i,(c,l)=>Xu(n,r,s,c,l,t,o)),Qi(n,s,!1),t&&n.patches_&&jn("Patches").generatePatches_(r,t,n.patches_,n.inversePatches_)}return r.copy_}function Xu(n,e,t,r,s,i,o){if(wr(s)){const c=i&&e&&e.type_!==3&&!ic(e.assigned_,r)?i.concat(r):void 0,l=Yi(n,s,c);if(Xh(t,r,l),wr(l))n.canAutoFreeze_=!1;else return}else o&&t.add(s);if(Dn(s)&&!Oa(s)){if(!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1)return;Yi(n,s),(!e||!e.scope_.parent_)&&typeof r!="symbol"&&Object.prototype.propertyIsEnumerable.call(t,r)&&Qi(n,s)}}function Qi(n,e,t=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Wc(e,t)}function b_(n,e){const t=Array.isArray(n),r={type_:t?1:0,scope_:e?e.scope_:ef(),modified_:!1,finalized_:!1,assigned_:{},parent_:e,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=r,i=zc;t&&(s=[r],i=Es);const{revoke:o,proxy:c}=Proxy.revocable(s,i);return r.draft_=c,r.revoke_=o,c}var zc={get(n,e){if(e===Xe)return n;const t=An(n);if(!ic(t,e))return I_(n,t,e);const r=t[e];return n.finalized_||!Dn(r)?r:r===Mo(n.base_,e)?(Lo(n),n.copy_[e]=uc(r,n)):r},has(n,e){return e in An(n)},ownKeys(n){return Reflect.ownKeys(An(n))},set(n,e,t){const r=tf(An(n),e);if(r!=null&&r.set)return r.set.call(n.draft_,t),!0;if(!n.modified_){const s=Mo(An(n),e),i=s==null?void 0:s[Xe];if(i&&i.base_===t)return n.copy_[e]=t,n.assigned_[e]=!1,!0;if(__(t,s)&&(t!==void 0||ic(n.base_,e)))return!0;Lo(n),lc(n)}return n.copy_[e]===t&&(t!==void 0||e in n.copy_)||Number.isNaN(t)&&Number.isNaN(n.copy_[e])||(n.copy_[e]=t,n.assigned_[e]=!0),!0},deleteProperty(n,e){return Mo(n.base_,e)!==void 0||e in n.base_?(n.assigned_[e]=!1,Lo(n),lc(n)):delete n.assigned_[e],n.copy_&&delete n.copy_[e],!0},getOwnPropertyDescriptor(n,e){const t=An(n),r=Reflect.getOwnPropertyDescriptor(t,e);return r&&{writable:!0,configurable:n.type_!==1||e!=="length",enumerable:r.enumerable,value:t[e]}},defineProperty(){ct(11)},getPrototypeOf(n){return vr(n.base_)},setPrototypeOf(){ct(12)}},Es={};Zi(zc,(n,e)=>{Es[n]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}});Es.deleteProperty=function(n,e){return Es.set.call(this,n,e,void 0)};Es.set=function(n,e,t){return zc.set.call(this,n[0],e,t,n[0])};function Mo(n,e){const t=n[Xe];return(t?An(t):n)[e]}function I_(n,e,t){var s;const r=tf(e,t);return r?"value"in r?r.value:(s=r.get)==null?void 0:s.call(n.draft_):void 0}function tf(n,e){if(!(e in n))return;let t=vr(n);for(;t;){const r=Object.getOwnPropertyDescriptor(t,e);if(r)return r;t=vr(t)}}function lc(n){n.modified_||(n.modified_=!0,n.parent_&&lc(n.parent_))}function Lo(n){n.copy_||(n.copy_=ac(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var x_=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{if(typeof e=="function"&&typeof t!="function"){const i=t;t=e;const o=this;return function(l=i,...h){return o.produce(l,m=>t.call(this,m,...h))}}typeof t!="function"&&ct(6),r!==void 0&&typeof r!="function"&&ct(7);let s;if(Dn(e)){const i=Qu(this),o=uc(e,void 0);let c=!0;try{s=t(o),c=!1}finally{c?oc(i):cc(i)}return Yu(i,r),Ju(s,i)}else if(!e||typeof e!="object"){if(s=t(e),s===void 0&&(s=e),s===Qh&&(s=void 0),this.autoFreeze_&&Wc(s,!0),r){const i=[],o=[];jn("Patches").generateReplacementPatches_(e,s,i,o),r(i,o)}return s}else ct(1,e)},this.produceWithPatches=(e,t)=>{if(typeof e=="function")return(o,...c)=>this.produceWithPatches(o,l=>e(l,...c));let r,s;return[this.produce(e,t,(o,c)=>{r=o,s=c}),r,s]},typeof(n==null?void 0:n.autoFreeze)=="boolean"&&this.setAutoFreeze(n.autoFreeze),typeof(n==null?void 0:n.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(n.useStrictShallowCopy)}createDraft(n){Dn(n)||ct(8),wr(n)&&(n=A_(n));const e=Qu(this),t=uc(n,void 0);return t[Xe].isManual_=!0,cc(e),t}finishDraft(n,e){const t=n&&n[Xe];(!t||!t.isManual_)&&ct(9);const{scope_:r}=t;return Yu(r,e),Ju(void 0,r)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}applyPatches(n,e){let t;for(t=e.length-1;t>=0;t--){const s=e[t];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}t>-1&&(e=e.slice(t+1));const r=jn("Patches").applyPatches_;return wr(n)?r(n,e):this.produce(n,s=>r(s,e))}};function uc(n,e){const t=Pa(n)?jn("MapSet").proxyMap_(n,e):Ca(n)?jn("MapSet").proxySet_(n,e):b_(n,e);return(e?e.scope_:ef()).drafts_.push(t),t}function A_(n){return wr(n)||ct(10,n),nf(n)}function nf(n){if(!Dn(n)||Oa(n))return n;const e=n[Xe];let t;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,t=ac(n,e.scope_.immer_.useStrictShallowCopy_)}else t=ac(n,!0);return Zi(t,(r,s)=>{Xh(t,r,nf(s))}),e&&(e.finalized_=!1),t}var et=new x_,S_=et.produce;et.produceWithPatches.bind(et);et.setAutoFreeze.bind(et);et.setUseStrictShallowCopy.bind(et);et.applyPatches.bind(et);et.createDraft.bind(et);et.finishDraft.bind(et);const R_=n=>(e,t,r)=>(r.setState=(s,i,...o)=>{const c=typeof s=="function"?S_(s):s;return e(c,i,...o)},n(r.setState,t,r)),k_=R_;var ed={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},N_=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,c=o?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,m=i>>2,g=(i&3)<<4|c>>4;let w=(c&15)<<2|h>>6,E=h&63;l||(E=64,o||(w=64)),r.push(t[m],t[g],t[w],t[E])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(rf(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):N_(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new P_;const w=i<<2|c>>4;if(r.push(w),h!==64){const E=c<<4&240|h>>2;if(r.push(E),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class P_ extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const C_=function(n){const e=rf(n);return sf.encodeByteArray(e,!0)},Ji=function(n){return C_(n).replace(/\./g,"")},af=function(n){try{return sf.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=()=>O_().__FIREBASE_DEFAULTS__,j_=()=>{if(typeof process>"u"||typeof ed>"u")return;const n=ed.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},V_=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&af(n[1]);return e&&JSON.parse(e)},Da=()=>{try{return D_()||j_()||V_()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},of=n=>{var e,t;return(t=(e=Da())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},cf=n=>{const e=of(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lf=()=>{var n;return(n=Da())===null||n===void 0?void 0:n.config},uf=n=>{var e;return(e=Da())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ji(JSON.stringify(t)),Ji(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function L_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function F_(){var n;const e=(n=Da())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function U_(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function B_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function $_(){const n=Ue();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function q_(){return!F_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ff(){try{return typeof indexedDB=="object"}catch{return!1}}function mf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}function W_(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=z_,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gn.prototype.create)}}class Gn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?H_(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new at(s,c,r)}}function H_(n,e){return n.replace(G_,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const G_=/\{\$([^}]+)}/g;function K_(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ts(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(td(i)&&td(o)){if(!Ts(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function td(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function as(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function os(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Z_(n,e){const t=new Y_(n,e);return t.subscribe.bind(t)}class Y_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Q_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Fo),s.error===void 0&&(s.error=Fo),s.complete===void 0&&(s.complete=Fo);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q_(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fo(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_=1e3,X_=2,ev=4*60*60*1e3,tv=.5;function nd(n,e=J_,t=X_){const r=e*Math.pow(t,n),s=Math.round(tv*r*(Math.random()-.5)*2);return Math.min(ev,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(n){return n&&n._delegate?n._delegate:n}class it{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new M_;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sv(e))try{this.getOrInitializeService({instanceIdentifier:Sn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Sn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Sn){return this.instances.has(e)}getOptions(e=Sn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Sn){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rv(n){return n===Sn?void 0:n}function sv(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const av={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},ov=te.INFO,cv={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},lv=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cv[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ja{constructor(e){this.name=e,this._logLevel=ov,this._logHandler=lv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?av[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const uv=(n,e)=>e.some(t=>n instanceof t);let rd,sd;function dv(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hv(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pf=new WeakMap,dc=new WeakMap,gf=new WeakMap,Uo=new WeakMap,Hc=new WeakMap;function fv(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(sn(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pf.set(t,n)}).catch(()=>{}),Hc.set(e,n),e}function mv(n){if(dc.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});dc.set(n,e)}let hc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dc.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gf.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return sn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function pv(n){hc=n(hc)}function gv(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bo(this),e,...t);return gf.set(r,e.sort?e.sort():[e]),sn(r)}:hv().includes(n)?function(...e){return n.apply(Bo(this),e),sn(pf.get(this))}:function(...e){return sn(n.apply(Bo(this),e))}}function yv(n){return typeof n=="function"?gv(n):(n instanceof IDBTransaction&&mv(n),uv(n,dv())?new Proxy(n,hc):n)}function sn(n){if(n instanceof IDBRequest)return fv(n);if(Uo.has(n))return Uo.get(n);const e=yv(n);return e!==n&&(Uo.set(n,e),Hc.set(e,n)),e}const Bo=n=>Hc.get(n);function yf(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),c=sn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sn(o.result),l.oldVersion,l.newVersion,sn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const _v=["get","getKey","getAll","getAllKeys","count"],vv=["put","add","delete","clear"],$o=new Map;function id(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($o.get(e))return $o.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vv.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||_v.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return $o.set(e,i),i}pv(n=>({...n,get:(e,t,r)=>id(e,t)||n.get(e,t,r),has:(e,t)=>!!id(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ev(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ev(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",ad="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=new ja("@firebase/app"),Tv="@firebase/app-compat",bv="@firebase/analytics-compat",Iv="@firebase/analytics",xv="@firebase/app-check-compat",Av="@firebase/app-check",Sv="@firebase/auth",Rv="@firebase/auth-compat",kv="@firebase/database",Nv="@firebase/data-connect",Pv="@firebase/database-compat",Cv="@firebase/functions",Ov="@firebase/functions-compat",Dv="@firebase/installations",jv="@firebase/installations-compat",Vv="@firebase/messaging",Mv="@firebase/messaging-compat",Lv="@firebase/performance",Fv="@firebase/performance-compat",Uv="@firebase/remote-config",Bv="@firebase/remote-config-compat",$v="@firebase/storage",qv="@firebase/storage-compat",Wv="@firebase/firestore",zv="@firebase/vertexai-preview",Hv="@firebase/firestore-compat",Gv="firebase",Kv="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc="[DEFAULT]",Zv={[fc]:"fire-core",[Tv]:"fire-core-compat",[Iv]:"fire-analytics",[bv]:"fire-analytics-compat",[Av]:"fire-app-check",[xv]:"fire-app-check-compat",[Sv]:"fire-auth",[Rv]:"fire-auth-compat",[kv]:"fire-rtdb",[Nv]:"fire-data-connect",[Pv]:"fire-rtdb-compat",[Cv]:"fire-fn",[Ov]:"fire-fn-compat",[Dv]:"fire-iid",[jv]:"fire-iid-compat",[Vv]:"fire-fcm",[Mv]:"fire-fcm-compat",[Lv]:"fire-perf",[Fv]:"fire-perf-compat",[Uv]:"fire-rc",[Bv]:"fire-rc-compat",[$v]:"fire-gcs",[qv]:"fire-gcs-compat",[Wv]:"fire-fst",[Hv]:"fire-fst-compat",[zv]:"fire-vertex","fire-js":"fire-js",[Gv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new Map,Yv=new Map,pc=new Map;function od(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function mt(n){const e=n.name;if(pc.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;pc.set(e,n);for(const t of Xi.values())od(t,n);for(const t of Yv.values())od(t,n);return!0}function yn(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vt(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new Gn("app","Firebase",Qv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=Kv;function _f(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw an.create("bad-app-name",{appName:String(s)});if(t||(t=lf()),!t)throw an.create("no-options");const i=Xi.get(s);if(i){if(Ts(t,i.options)&&Ts(r,i.config))return i;throw an.create("duplicate-app",{appName:s})}const o=new iv(s);for(const l of pc.values())o.addComponent(l);const c=new Jv(t,r,o);return Xi.set(s,c),c}function Va(n=mc){const e=Xi.get(n);if(!e&&n===mc&&lf())return _f();if(!e)throw an.create("no-app",{appName:n});return e}function Ge(n,e,t){var r;let s=(r=Zv[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(c.join(" "));return}mt(new it(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xv="firebase-heartbeat-database",e0=1,bs="firebase-heartbeat-store";let qo=null;function vf(){return qo||(qo=yf(Xv,e0,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(bs)}catch(t){console.warn(t)}}}}).catch(n=>{throw an.create("idb-open",{originalErrorMessage:n.message})})),qo}async function t0(n){try{const t=(await vf()).transaction(bs),r=await t.objectStore(bs).get(wf(n));return await t.done,r}catch(e){if(e instanceof at)Ut.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function cd(n,e){try{const r=(await vf()).transaction(bs,"readwrite");await r.objectStore(bs).put(e,wf(n)),await r.done}catch(t){if(t instanceof at)Ut.warn(t.message);else{const r=an.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(r.message)}}}function wf(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=1024,r0=30*24*60*60*1e3;class s0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new a0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=r0}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ut.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ld(),{heartbeatsToSend:r,unsentEntries:s}=i0(this._heartbeatsCache.heartbeats),i=Ji(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Ut.warn(t),""}}}function ld(){return new Date().toISOString().substring(0,10)}function i0(n,e=n0){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ud(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ff()?mf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await t0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(n){return Ji(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(n){mt(new it("platform-logger",e=>new wv(e),"PRIVATE")),mt(new it("heartbeat",e=>new s0(e),"PRIVATE")),Ge(fc,ad,n),Ge(fc,ad,"esm2017"),Ge("fire-js","")}o0("");function Gc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c0=Ef,Tf=new Gn("auth","Firebase",Ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=new ja("@firebase/auth");function l0(n,...e){ea.logLevel<=te.WARN&&ea.warn(`Auth (${Kn}): ${n}`,...e)}function Fi(n,...e){ea.logLevel<=te.ERROR&&ea.error(`Auth (${Kn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,...e){throw Kc(n,...e)}function wt(n,...e){return Kc(n,...e)}function bf(n,e,t){const r=Object.assign(Object.assign({},c0()),{[e]:t});return new Gn("auth","Firebase",r).create(e,{appName:n.name})}function Lt(n){return bf(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Tf.create(n,...e)}function H(n,e,...t){if(!n)throw Kc(e,...t)}function jt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function Bt(n,e){n||jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function u0(){return dd()==="http:"||dd()==="https:"}function dd(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(u0()||hf()||"connection"in navigator)?navigator.onLine:!0}function h0(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Bt(t>e,"Short delay should be less than long delay!"),this.isMobile=L_()||B_()}get(){return d0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(n,e){Bt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0=new Zs(3e4,6e4);function _n(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vn(n,e,t,r,s={}){return xf(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ks(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return U_()||(h.referrerPolicy="no-referrer"),If.fetch()(Af(n,n.config.apiHost,t,c),h)})}async function xf(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},f0),e);try{const s=new g0(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ki(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ki(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ki(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw ki(n,"user-disabled",o);const m=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw bf(n,m,h);pt(n,m)}}catch(s){if(s instanceof at)throw s;pt(n,"network-request-failed",{message:String(s)})}}async function Ys(n,e,t,r,s={}){const i=await vn(n,e,t,r,s);return"mfaPendingCredential"in i&&pt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Af(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Zc(n.config,s):`${n.config.apiScheme}://${s}`}function p0(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class g0{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),m0.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ki(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=wt(n,e,r);return s.customData._tokenResponse=t,s}function hd(n){return n!==void 0&&n.enterprise!==void 0}class y0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return p0(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _0(n,e){return vn(n,"GET","/v2/recaptchaConfig",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v0(n,e){return vn(n,"POST","/v1/accounts:delete",e)}async function Sf(n,e){return vn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function w0(n,e=!1){const t=_e(n),r=await t.getIdToken(e),s=Yc(r);H(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ms(Wo(s.auth_time)),issuedAtTime:ms(Wo(s.iat)),expirationTime:ms(Wo(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wo(n){return Number(n)*1e3}function Yc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=af(t);return s?JSON.parse(s):(Fi("Failed to decode base64 JWT payload"),null)}catch(s){return Fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function fd(n){const e=Yc(n);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&E0(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function E0({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ms(this.lastLoginAt),this.creationTime=ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Is(n,Sf(t,{idToken:r}));H(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rf(i.providerUserInfo):[],c=I0(n.providerData,o),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),m=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new yc(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(n,g)}async function b0(n){const e=_e(n);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function I0(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rf(n){return n.map(e=>{var{providerId:t}=e,r=Gc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(n,e){const t=await xf(n,{},async()=>{const r=Ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Af(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",If.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function A0(n,e){return vn(n,"POST","/v2/accounts:revokeToken",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){H(e.length!==0,"internal-error");const t=fd(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await x0(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new dr;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new dr,this.toJSON())}_performRefresh(){return jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(n,e){H(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new T0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Is(this,this.stsTokenManager.getToken(this.auth,e));return H(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return w0(this,e)}reload(){return b0(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Lt(this.auth));const e=await this.getIdToken();return await Is(this,v0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,c,l,h,m;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=t.photoURL)!==null&&o!==void 0?o:void 0,N=(c=t.tenantId)!==null&&c!==void 0?c:void 0,C=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,F=(h=t.createdAt)!==null&&h!==void 0?h:void 0,j=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:$,emailVerified:J,isAnonymous:ve,providerData:le,stsTokenManager:b}=t;H($&&b,e,"internal-error");const y=dr.fromJSON(this.name,b);H(typeof $=="string",e,"internal-error"),Yt(g,e.name),Yt(w,e.name),H(typeof J=="boolean",e,"internal-error"),H(typeof ve=="boolean",e,"internal-error"),Yt(E,e.name),Yt(k,e.name),Yt(N,e.name),Yt(C,e.name),Yt(F,e.name),Yt(j,e.name);const v=new Vt({uid:$,auth:e,email:w,emailVerified:J,displayName:g,isAnonymous:ve,photoURL:k,phoneNumber:E,tenantId:N,stsTokenManager:y,createdAt:F,lastLoginAt:j});return le&&Array.isArray(le)&&(v.providerData=le.map(T=>Object.assign({},T))),C&&(v._redirectEventId=C),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new dr;s.updateFromServerResponse(t);const i=new Vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];H(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new dr;c.updateFromIdToken(r);const l=new Vt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const md=new Map;function Mt(n){Bt(n instanceof Function,"Expected a class definition");let e=md.get(n);return e?(Bt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,md.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kf.type="NONE";const pd=kf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class hr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new hr(Mt(pd),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Mt(pd);const o=Ui(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const m=await h._get(o);if(m){const g=Vt._fromJSON(e,m);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hr(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new hr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Of(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Nf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jf(e))return"Blackberry";if(Vf(e))return"Webos";if(Pf(e))return"Safari";if((e.includes("chrome/")||Cf(e))&&!e.includes("edge/"))return"Chrome";if(Df(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Nf(n=Ue()){return/firefox\//i.test(n)}function Pf(n=Ue()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cf(n=Ue()){return/crios\//i.test(n)}function Of(n=Ue()){return/iemobile/i.test(n)}function Df(n=Ue()){return/android/i.test(n)}function jf(n=Ue()){return/blackberry/i.test(n)}function Vf(n=Ue()){return/webos/i.test(n)}function Qc(n=Ue()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function S0(n=Ue()){var e;return Qc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function R0(){return $_()&&document.documentMode===10}function Mf(n=Ue()){return Qc(n)||Df(n)||Vf(n)||jf(n)||/windows phone/i.test(n)||Of(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(n,e=[]){let t;switch(n){case"Browser":t=gd(Ue());break;case"Worker":t=`${gd(Ue())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Kn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N0(n,e={}){return vn(n,"GET","/v2/passwordPolicy",_n(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=6;class C0{constructor(e){var t,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:P0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yd(this),this.idTokenSubscription=new yd(this),this.beforeStateQueue=new k0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Mt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await hr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Sf(this,{idToken:e}),r=await Vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=h0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Lt(this));const t=e?_e(e):null;return t&&H(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Lt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Lt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await N0(this),t=new C0(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await A0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Mt(e)||this._popupRedirectResolver;H(t,this,"argument-error"),this.redirectPersistenceManager=await hr.create(this,[Mt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&l0(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Zn(n){return _e(n)}class yd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Z_(t=>this.observer=t)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function D0(n){Ma=n}function Ff(n){return Ma.loadJS(n)}function j0(){return Ma.recaptchaEnterpriseScript}function V0(){return Ma.gapiScript}function M0(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const L0="recaptcha-enterprise",F0="NO_RECAPTCHA";class U0{constructor(e){this.type=L0,this.auth=Zn(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{_0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new y0(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;hd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(F0)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!t&&hd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=j0();l.length!==0&&(l+=c),Ff(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function _d(n,e,t,r=!1){const s=new U0(n);let i;try{i=await s.verify(t)}catch{i=await s.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _c(n,e,t,r){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await _d(n,e,t,t==="getOobCode");return r(n,i)}else return r(n,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _d(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n,e){const t=yn(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ts(i,e??{}))return s;pt(s,"already-initialized")}return t.initialize({options:e})}function $0(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Mt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function q0(n,e,t){const r=Zn(n);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Uf(e),{host:o,port:c}=W0(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),z0()}function Uf(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function W0(n){const e=Uf(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:vd(o)}}}function vd(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function z0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return jt("not implemented")}_getIdTokenResponse(e){return jt("not implemented")}_linkToIdToken(e,t){return jt("not implemented")}_getReauthenticationResolver(e){return jt("not implemented")}}async function H0(n,e){return vn(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G0(n,e){return Ys(n,"POST","/v1/accounts:signInWithPassword",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K0(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}async function Z0(n,e){return Ys(n,"POST","/v1/accounts:signInWithEmailLink",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs extends Jc{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new xs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new xs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _c(e,t,"signInWithPassword",G0);case"emailLink":return K0(e,{email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _c(e,r,"signUpPassword",H0);case"emailLink":return Z0(e,{idToken:t,email:this._email,oobCode:this._password});default:pt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(n,e){return Ys(n,"POST","/v1/accounts:signInWithIdp",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0="http://localhost";class Vn extends Jc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Vn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):pt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Gc(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Vn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return fr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,fr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fr(e,t)}buildRequest(){const e={requestUri:Y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ks(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J0(n){const e=as(os(n)).link,t=e?as(os(e)).deep_link_id:null,r=as(os(n)).deep_link_id;return(r?as(os(r)).link:null)||r||t||e||n}class Xc{constructor(e){var t,r,s,i,o,c;const l=as(os(e)),h=(t=l.apiKey)!==null&&t!==void 0?t:null,m=(r=l.oobCode)!==null&&r!==void 0?r:null,g=Q0((s=l.mode)!==null&&s!==void 0?s:null);H(h&&m&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=m,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const t=J0(e);try{return new Xc(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(){this.providerId=Cr.PROVIDER_ID}static credential(e,t){return xs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Xc.parseLink(t);return H(r,"argument-error"),xs._fromEmailAndCode(e,r.code,r.tenantId)}}Cr.PROVIDER_ID="password";Cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Bf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends Qs{constructor(){super("facebook.com")}static credential(e){return Vn._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xt.credential(e.oauthAccessToken)}catch{return null}}}Xt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends Qs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Vn._fromParams({providerId:en.PROVIDER_ID,signInMethod:en.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return en.credentialFromTaggedObject(e)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return en.credential(t,r)}catch{return null}}}en.GOOGLE_SIGN_IN_METHOD="google.com";en.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Qs{constructor(){super("github.com")}static credential(e){return Vn._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tn.credential(e.oauthAccessToken)}catch{return null}}}tn.GITHUB_SIGN_IN_METHOD="github.com";tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Qs{constructor(){super("twitter.com")}static credential(e,t){return Vn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return nn.credential(t,r)}catch{return null}}}nn.TWITTER_SIGN_IN_METHOD="twitter.com";nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(n,e){return Ys(n,"POST","/v1/accounts:signUp",_n(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Vt._fromIdTokenResponse(e,r,s),o=wd(r);return new Mn({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=wd(r);return new Mn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function wd(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends at{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new na(e,t,r,s)}}function $f(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(n,i,e,r):i})}async function ew(n,e,t=!1){const r=await Is(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw(n,e,t=!1){const{auth:r}=n;if(vt(r.app))return Promise.reject(Lt(r));const s="reauthenticate";try{const i=await Is(n,$f(r,s,e,n),t);H(i.idToken,r,"internal-error");const o=Yc(i.idToken);H(o,r,"internal-error");const{sub:c}=o;return H(n.uid===c,r,"user-mismatch"),Mn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,e,t=!1){if(vt(n.app))return Promise.reject(Lt(n));const r="signIn",s=await $f(n,r,e),i=await Mn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function nw(n,e){return qf(Zn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wf(n){const e=Zn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rw(n,e,t){if(vt(n.app))return Promise.reject(Lt(n));const r=Zn(n),o=await _c(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",X0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Wf(n),l}),c=await Mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function sw(n,e,t){return vt(n.app)?Promise.reject(Lt(n)):nw(_e(n),Cr.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Wf(n),r})}function iw(n,e,t,r){return _e(n).onIdTokenChanged(e,t,r)}function aw(n,e,t){return _e(n).beforeAuthStateChanged(e,t)}function ow(n,e,t,r){return _e(n).onAuthStateChanged(e,t,r)}function cw(n){return _e(n).signOut()}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1e3,uw=10;class Hf extends zf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Mf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);R0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,uw):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hf.type="LOCAL";const dw=Hf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf extends zf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gf.type="SESSION";const Kf=Gf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new La(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(t.origin,i)),l=await hw(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}La.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=el("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(w.data.response);break;default:clearTimeout(m),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(){return window}function mw(n){Et().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(){return typeof Et().WorkerGlobalScope<"u"&&typeof Et().importScripts=="function"}async function pw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gw(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yw(){return Zf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yf="firebaseLocalStorageDb",_w=1,sa="firebaseLocalStorage",Qf="fbase_key";class Js{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fa(n,e){return n.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function vw(){const n=indexedDB.deleteDatabase(Yf);return new Js(n).toPromise()}function vc(){const n=indexedDB.open(Yf,_w);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(sa,{keyPath:Qf})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await vw(),e(await vc()))})})}async function Ed(n,e,t){const r=Fa(n,!0).put({[Qf]:e,value:t});return new Js(r).toPromise()}async function ww(n,e){const t=Fa(n,!1).get(e),r=await new Js(t).toPromise();return r===void 0?null:r.value}function Td(n,e){const t=Fa(n,!0).delete(e);return new Js(t).toPromise()}const Ew=800,Tw=3;class Jf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Tw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=La._getInstance(yw()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pw(),!this.activeServiceWorker)return;this.sender=new fw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gw()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vc();return await Ed(e,ra,"1"),await Td(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ed(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>ww(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Td(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Fa(s,!1).getAll();return new Js(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ew)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jf.type="LOCAL";const bw=Jf;new Zs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(n,e){return e?Mt(e):(H(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends Jc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xw(n){return qf(n.auth,new tl(n),n.bypassAuthState)}function Aw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),tw(t,new tl(n),n.bypassAuthState)}async function Sw(n){const{auth:e,user:t}=n;return H(t,e,"internal-error"),ew(t,new tl(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xw;case"linkViaPopup":case"linkViaRedirect":return Sw;case"reauthViaPopup":case"reauthViaRedirect":return Aw;default:pt(this.auth,"internal-error")}}resolve(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rw=new Zs(2e3,1e4);class lr extends Xf{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,lr.currentPopupAction&&lr.currentPopupAction.cancel(),lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Bt(this.filter.length===1,"Popup operations only handle one event");const e=el();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rw.get())};e()}}lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw="pendingRedirect",Bi=new Map;class Nw extends Xf{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await Pw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Pw(n,e){const t=Dw(e),r=Ow(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function Cw(n,e){Bi.set(n._key(),e)}function Ow(n){return Mt(n._redirectPersistence)}function Dw(n){return Ui(kw,n.config.apiKey,n.name)}async function jw(n,e,t=!1){if(vt(n.app))return Promise.reject(Lt(n));const r=Zn(n),s=Iw(r,e),o=await new Nw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=10*60*1e3;class Mw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Lw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!em(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(wt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vw&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function em({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Lw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return em(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(n,e={}){return vn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bw=/^https?/;async function $w(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Fw(n);for(const t of e)try{if(qw(t))return}catch{}pt(n,"unauthorized-domain")}function qw(n){const e=gc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Bw.test(t))return!1;if(Uw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new Zs(3e4,6e4);function Id(){const n=Et().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zw(n){return new Promise((e,t)=>{var r,s,i;function o(){Id(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Id(),t(wt(n,"network-request-failed"))},timeout:Ww.get()})}if(!((s=(r=Et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Et().gapi)===null||i===void 0)&&i.load)o();else{const c=M0("iframefcb");return Et()[c]=()=>{gapi.load?o():t(wt(n,"network-request-failed"))},Ff(`${V0()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw $i=null,e})}let $i=null;function Hw(n){return $i=$i||zw(n),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw=new Zs(5e3,15e3),Kw="__/auth/iframe",Zw="emulator/auth/iframe",Yw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jw(n){const e=n.config;H(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Zc(e,Zw):`https://${n.config.authDomain}/${Kw}`,r={apiKey:e.apiKey,appName:n.name,v:Kn},s=Qw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ks(r).slice(1)}`}async function Xw(n){const e=await Hw(n),t=Et().gapi;return H(t,n,"internal-error"),e.open({where:document.body,url:Jw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wt(n,"network-request-failed"),c=Et().setTimeout(()=>{i(o)},Gw.get());function l(){Et().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tE=500,nE=600,rE="_blank",sE="http://localhost";class xd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iE(n,e,t,r=tE,s=nE){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},eE),{width:r.toString(),height:s.toString(),top:i,left:o}),h=Ue().toLowerCase();t&&(c=Cf(h)?rE:t),Nf(h)&&(e=e||sE,l.scrollbars="yes");const m=Object.entries(l).reduce((w,[E,k])=>`${w}${E}=${k},`,"");if(S0(h)&&c!=="_self")return aE(e||"",c),new xd(null);const g=window.open(e||"",c,m);H(g,n,"popup-blocked");try{g.focus()}catch{}return new xd(g)}function aE(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="__/auth/handler",cE="emulator/auth/handler",lE=encodeURIComponent("fac");async function Ad(n,e,t,r,s,i){H(n.config.authDomain,n,"auth-domain-config-required"),H(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Kn,eventId:s};if(e instanceof Bf){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",K_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,g]of Object.entries({}))o[m]=g}if(e instanceof Qs){const m=e.getScopes().filter(g=>g!=="");m.length>0&&(o.scopes=m.join(","))}n.tenantId&&(o.tid=n.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await n._getAppCheckToken(),h=l?`#${lE}=${encodeURIComponent(l)}`:"";return`${uE(n)}?${Ks(c).slice(1)}${h}`}function uE({config:n}){return n.emulator?Zc(n,cE):`https://${n.authDomain}/${oE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="webStorageSupport";class dE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kf,this._completeRedirectFn=jw,this._overrideRedirectResult=Cw}async _openPopup(e,t,r,s){var i;Bt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ad(e,t,r,gc(),s);return iE(e,o,el())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Ad(e,t,r,gc(),s);return mw(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Bt(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Xw(e),r=new Mw(e);return t.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zo,{type:zo},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zo];o!==void 0&&t(!!o),pt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$w(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Mf()||Pf()||Qc()}}const hE=dE;var Sd="@firebase/auth",Rd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pE(n){mt(new it("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lf(n)},h=new O0(r,s,i,l);return $0(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),mt(new it("auth-internal",e=>{const t=Zn(e.getProvider("auth").getImmediate());return(r=>new fE(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ge(Sd,Rd,mE(n)),Ge(Sd,Rd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gE=5*60,yE=uf("authIdTokenMaxAge")||gE;let kd=null;const _E=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yE)return;const s=t==null?void 0:t.token;kd!==s&&(kd=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vE(n=Va()){const e=yn(n,"auth");if(e.isInitialized())return e.getImmediate();const t=B0(n,{popupRedirectResolver:hE,persistence:[bw,dw,Kf]}),r=uf("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_E(i.toString());aw(t,o,()=>o(t.currentUser)),iw(t,c=>o(c))}}const s=of("auth");return s&&q0(t,`http://${s}`),t}function wE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}D0({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=wt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",wE().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pE("Browser");var EE="firebase",TE="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ge(EE,TE,"app");var Nd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,tm;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function v(){}v.prototype=y.prototype,b.D=y.prototype,b.prototype=new v,b.prototype.constructor=b,b.C=function(T,I,A){for(var _=Array(arguments.length-2),Nt=2;Nt<arguments.length;Nt++)_[Nt-2]=arguments[Nt];return y.prototype[I].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)T[I]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(I=0;16>I;++I)T[I]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=b.g[0],v=b.g[1],I=b.g[2];var A=b.g[3],_=y+(A^v&(I^A))+T[0]+3614090360&4294967295;y=v+(_<<7&4294967295|_>>>25),_=A+(I^y&(v^I))+T[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=I+(v^A&(y^v))+T[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=v+(y^I&(A^y))+T[3]+3250441966&4294967295,v=I+(_<<22&4294967295|_>>>10),_=y+(A^v&(I^A))+T[4]+4118548399&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(I^y&(v^I))+T[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=I+(v^A&(y^v))+T[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=v+(y^I&(A^y))+T[7]+4249261313&4294967295,v=I+(_<<22&4294967295|_>>>10),_=y+(A^v&(I^A))+T[8]+1770035416&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(I^y&(v^I))+T[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=I+(v^A&(y^v))+T[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=v+(y^I&(A^y))+T[11]+2304563134&4294967295,v=I+(_<<22&4294967295|_>>>10),_=y+(A^v&(I^A))+T[12]+1804603682&4294967295,y=v+(_<<7&4294967295|_>>>25),_=A+(I^y&(v^I))+T[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=I+(v^A&(y^v))+T[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=v+(y^I&(A^y))+T[15]+1236535329&4294967295,v=I+(_<<22&4294967295|_>>>10),_=y+(I^A&(v^I))+T[1]+4129170786&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^I&(y^v))+T[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=I+(y^v&(A^y))+T[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(I^A))+T[0]+3921069994&4294967295,v=I+(_<<20&4294967295|_>>>12),_=y+(I^A&(v^I))+T[5]+3593408605&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^I&(y^v))+T[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=I+(y^v&(A^y))+T[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(I^A))+T[4]+3889429448&4294967295,v=I+(_<<20&4294967295|_>>>12),_=y+(I^A&(v^I))+T[9]+568446438&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^I&(y^v))+T[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=I+(y^v&(A^y))+T[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(I^A))+T[8]+1163531501&4294967295,v=I+(_<<20&4294967295|_>>>12),_=y+(I^A&(v^I))+T[13]+2850285829&4294967295,y=v+(_<<5&4294967295|_>>>27),_=A+(v^I&(y^v))+T[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=I+(y^v&(A^y))+T[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=v+(A^y&(I^A))+T[12]+2368359562&4294967295,v=I+(_<<20&4294967295|_>>>12),_=y+(v^I^A)+T[5]+4294588738&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^I)+T[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=I+(A^y^v)+T[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=v+(I^A^y)+T[14]+4259657740&4294967295,v=I+(_<<23&4294967295|_>>>9),_=y+(v^I^A)+T[1]+2763975236&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^I)+T[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=I+(A^y^v)+T[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=v+(I^A^y)+T[10]+3200236656&4294967295,v=I+(_<<23&4294967295|_>>>9),_=y+(v^I^A)+T[13]+681279174&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^I)+T[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=I+(A^y^v)+T[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=v+(I^A^y)+T[6]+76029189&4294967295,v=I+(_<<23&4294967295|_>>>9),_=y+(v^I^A)+T[9]+3654602809&4294967295,y=v+(_<<4&4294967295|_>>>28),_=A+(y^v^I)+T[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=I+(A^y^v)+T[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=v+(I^A^y)+T[2]+3299628645&4294967295,v=I+(_<<23&4294967295|_>>>9),_=y+(I^(v|~A))+T[0]+4096336452&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~I))+T[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=I+(y^(A|~v))+T[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=v+(A^(I|~y))+T[5]+4237533241&4294967295,v=I+(_<<21&4294967295|_>>>11),_=y+(I^(v|~A))+T[12]+1700485571&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~I))+T[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=I+(y^(A|~v))+T[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=v+(A^(I|~y))+T[1]+2240044497&4294967295,v=I+(_<<21&4294967295|_>>>11),_=y+(I^(v|~A))+T[8]+1873313359&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~I))+T[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=I+(y^(A|~v))+T[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=v+(A^(I|~y))+T[13]+1309151649&4294967295,v=I+(_<<21&4294967295|_>>>11),_=y+(I^(v|~A))+T[4]+4149444226&4294967295,y=v+(_<<6&4294967295|_>>>26),_=A+(v^(y|~I))+T[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=I+(y^(A|~v))+T[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=v+(A^(I|~y))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+A&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var v=y-this.blockSize,T=this.B,I=this.h,A=0;A<y;){if(I==0)for(;A<=v;)s(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<y;)if(T[I++]=b.charCodeAt(A++),I==this.blockSize){s(this,T),I=0;break}}else for(;A<y;)if(T[I++]=b[A++],I==this.blockSize){s(this,T),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var v=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=v&255,v/=256;for(this.u(b),b=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)b[v++]=this.g[y]>>>T&255;return b};function i(b,y){var v=c;return Object.prototype.hasOwnProperty.call(v,b)?v[b]:v[b]=y(b)}function o(b,y){this.h=y;for(var v=[],T=!0,I=b.length-1;0<=I;I--){var A=b[I]|0;T&&A==y||(v[I]=A,T=!1)}this.g=v}var c={};function l(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return g;if(0>b)return C(h(-b));for(var y=[],v=1,T=0;b>=v;T++)y[T]=b/v|0,v*=4294967296;return new o(y,0)}function m(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return C(m(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(y,8)),T=g,I=0;I<b.length;I+=8){var A=Math.min(8,b.length-I),_=parseInt(b.substring(I,I+A),y);8>A?(A=h(Math.pow(y,A)),T=T.j(A).add(h(_))):(T=T.j(v),T=T.add(h(_)))}return T}var g=l(0),w=l(1),E=l(16777216);n=o.prototype,n.m=function(){if(N(this))return-C(this).m();for(var b=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);b+=(0<=T?T:4294967296+T)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(k(this))return"0";if(N(this))return"-"+C(this).toString(b);for(var y=h(Math.pow(b,6)),v=this,T="";;){var I=J(v,y).g;v=F(v,I.j(y));var A=((0<v.g.length?v.g[0]:v.h)>>>0).toString(b);if(v=I,k(v))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function k(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function N(b){return b.h==-1}n.l=function(b){return b=F(this,b),N(b)?-1:k(b)?0:1};function C(b){for(var y=b.g.length,v=[],T=0;T<y;T++)v[T]=~b.g[T];return new o(v,~b.h).add(w)}n.abs=function(){return N(this)?C(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],T=0,I=0;I<=y;I++){var A=T+(this.i(I)&65535)+(b.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);T=_>>>16,A&=65535,_&=65535,v[I]=_<<16|A}return new o(v,v[v.length-1]&-2147483648?-1:0)};function F(b,y){return b.add(C(y))}n.j=function(b){if(k(this)||k(b))return g;if(N(this))return N(b)?C(this).j(C(b)):C(C(this).j(b));if(N(b))return C(this.j(C(b)));if(0>this.l(E)&&0>b.l(E))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var I=0;I<b.g.length;I++){var A=this.i(T)>>>16,_=this.i(T)&65535,Nt=b.i(I)>>>16,Mr=b.i(I)&65535;v[2*T+2*I]+=_*Mr,j(v,2*T+2*I),v[2*T+2*I+1]+=A*Mr,j(v,2*T+2*I+1),v[2*T+2*I+1]+=_*Nt,j(v,2*T+2*I+1),v[2*T+2*I+2]+=A*Nt,j(v,2*T+2*I+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function j(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function $(b,y){this.g=b,this.h=y}function J(b,y){if(k(y))throw Error("division by zero");if(k(b))return new $(g,g);if(N(b))return y=J(C(b),y),new $(C(y.g),C(y.h));if(N(y))return y=J(b,C(y)),new $(C(y.g),y.h);if(30<b.g.length){if(N(b)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var v=w,T=y;0>=T.l(b);)v=ve(v),T=ve(T);var I=le(v,1),A=le(T,1);for(T=le(T,2),v=le(v,2);!k(T);){var _=A.add(T);0>=_.l(b)&&(I=I.add(v),A=_),T=le(T,1),v=le(v,1)}return y=F(b,I.j(y)),new $(I,y)}for(I=g;0<=b.l(y);){for(v=Math.max(1,Math.floor(b.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=h(v),_=A.j(y);N(_)||0<_.l(b);)v-=T,A=h(v),_=A.j(y);k(A)&&(A=w),I=I.add(A),b=F(b,_)}return new $(I,b)}n.A=function(b){return J(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&b.i(T);return new o(v,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|b.i(T);return new o(v,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^b.i(T);return new o(v,this.h^b.h)};function ve(b){for(var y=b.g.length+1,v=[],T=0;T<y;T++)v[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(v,b.h)}function le(b,y){var v=y>>5;y%=32;for(var T=b.g.length-v,I=[],A=0;A<T;A++)I[A]=0<y?b.i(A+v)>>>y|b.i(A+v+1)<<32-y:b.i(A+v);return new o(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,tm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=m,Cn=o}).apply(typeof Nd<"u"?Nd:typeof self<"u"?self:typeof window<"u"?window:{});var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nm,cs,rm,qi,wc,sm,im,am;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ni=="object"&&Ni];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var x=a[p];if(!(x in f))break e;f=f[x]}a=a[a.length-1],p=f[a],u=u(p),u!=p&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,p=!1,x={next:function(){if(!p&&f<a.length){var S=f++;return{value:u(S,a[S]),done:!1}}return p=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function m(a,u,f){return a.call.apply(a.bind,arguments)}function g(a,u,f){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,p),a.apply(u,x)}}return function(){return a.apply(u,arguments)}}function w(a,u,f){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:g,w.apply(null,arguments)}function E(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function k(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(p,x,S){for(var V=Array(arguments.length-2),ue=2;ue<arguments.length;ue++)V[ue-2]=arguments[ue];return u.prototype[x].apply(p,V)}}function N(a){const u=a.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=a[p];return f}return[]}function C(a,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const x=a.length||0,S=p.length||0;a.length=x+S;for(let V=0;V<S;V++)a[x+V]=p[V]}else a.push(p)}}class F{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function J(a){return J[" "](a),a}J[" "]=function(){};var ve=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function le(a,u,f){for(const p in a)u.call(f,a[p],p,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let f,p;for(let x=1;x<arguments.length;x++){p=arguments[x];for(f in p)a[f]=p[f];for(let S=0;S<v.length;S++)f=v[S],Object.prototype.hasOwnProperty.call(p,f)&&(a[f]=p[f])}}function I(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function A(a){c.setTimeout(()=>{throw a},0)}function _(){var a=co;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class Nt{constructor(){this.h=this.g=null}add(u,f){const p=Mr.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Mr=new F(()=>new hg,a=>a.reset());class hg{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Lr,Fr=!1,co=new Nt,zl=()=>{const a=c.Promise.resolve(void 0);Lr=()=>{a.then(fg)}};var fg=()=>{for(var a;a=_();){try{a.h.call(a.g)}catch(f){A(f)}var u=Mr;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Fr=!1};function Ht(){this.s=this.s,this.C=this.C}Ht.prototype.s=!1,Ht.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ht.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Oe(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Oe.prototype.h=function(){this.defaultPrevented=!0};var mg=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return a}();function Ur(a,u){if(Oe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ve){e:{try{J(u.nodeName);var x=!0;break e}catch{}x=!1}x||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pg[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ur.aa.h.call(this)}}k(Ur,Oe);var pg={2:"touch",3:"pen",4:"mouse"};Ur.prototype.h=function(){Ur.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var li="closure_listenable_"+(1e6*Math.random()|0),gg=0;function yg(a,u,f,p,x){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=x,this.key=++gg,this.da=this.fa=!1}function ui(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function di(a){this.src=a,this.g={},this.h=0}di.prototype.add=function(a,u,f,p,x){var S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);var V=uo(a,u,p,x);return-1<V?(u=a[V],f||(u.fa=!1)):(u=new yg(u,this.src,S,!!p,x),u.fa=f,a.push(u)),u};function lo(a,u){var f=u.type;if(f in a.g){var p=a.g[f],x=Array.prototype.indexOf.call(p,u,void 0),S;(S=0<=x)&&Array.prototype.splice.call(p,x,1),S&&(ui(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function uo(a,u,f,p){for(var x=0;x<a.length;++x){var S=a[x];if(!S.da&&S.listener==u&&S.capture==!!f&&S.ha==p)return x}return-1}var ho="closure_lm_"+(1e6*Math.random()|0),fo={};function Hl(a,u,f,p,x){if(Array.isArray(u)){for(var S=0;S<u.length;S++)Hl(a,u[S],f,p,x);return null}return f=Zl(f),a&&a[li]?a.K(u,f,h(p)?!!p.capture:!!p,x):_g(a,u,f,!1,p,x)}function _g(a,u,f,p,x,S){if(!u)throw Error("Invalid event type");var V=h(x)?!!x.capture:!!x,ue=po(a);if(ue||(a[ho]=ue=new di(a)),f=ue.add(u,f,p,V,S),f.proxy)return f;if(p=vg(),f.proxy=p,p.src=a,p.listener=f,a.addEventListener)mg||(x=V),x===void 0&&(x=!1),a.addEventListener(u.toString(),p,x);else if(a.attachEvent)a.attachEvent(Kl(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function vg(){function a(f){return u.call(a.src,a.listener,f)}const u=wg;return a}function Gl(a,u,f,p,x){if(Array.isArray(u))for(var S=0;S<u.length;S++)Gl(a,u[S],f,p,x);else p=h(p)?!!p.capture:!!p,f=Zl(f),a&&a[li]?(a=a.i,u=String(u).toString(),u in a.g&&(S=a.g[u],f=uo(S,f,p,x),-1<f&&(ui(S[f]),Array.prototype.splice.call(S,f,1),S.length==0&&(delete a.g[u],a.h--)))):a&&(a=po(a))&&(u=a.g[u.toString()],a=-1,u&&(a=uo(u,f,p,x)),(f=-1<a?u[a]:null)&&mo(f))}function mo(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[li])lo(u.i,a);else{var f=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(f,p,a.capture):u.detachEvent?u.detachEvent(Kl(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=po(u))?(lo(f,a),f.h==0&&(f.src=null,u[ho]=null)):ui(a)}}}function Kl(a){return a in fo?fo[a]:fo[a]="on"+a}function wg(a,u){if(a.da)a=!0;else{u=new Ur(u,this);var f=a.listener,p=a.ha||a.src;a.fa&&mo(a),a=f.call(p,u)}return a}function po(a){return a=a[ho],a instanceof di?a:null}var go="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zl(a){return typeof a=="function"?a:(a[go]||(a[go]=function(u){return a.handleEvent(u)}),a[go])}function De(){Ht.call(this),this.i=new di(this),this.M=this,this.F=null}k(De,Ht),De.prototype[li]=!0,De.prototype.removeEventListener=function(a,u,f,p){Gl(this,a,u,f,p)};function $e(a,u){var f,p=a.F;if(p)for(f=[];p;p=p.F)f.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new Oe(u,a);else if(u instanceof Oe)u.target=u.target||a;else{var x=u;u=new Oe(p,a),T(u,x)}if(x=!0,f)for(var S=f.length-1;0<=S;S--){var V=u.g=f[S];x=hi(V,p,!0,u)&&x}if(V=u.g=a,x=hi(V,p,!0,u)&&x,x=hi(V,p,!1,u)&&x,f)for(S=0;S<f.length;S++)V=u.g=f[S],x=hi(V,p,!1,u)&&x}De.prototype.N=function(){if(De.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],p=0;p<f.length;p++)ui(f[p]);delete a.g[u],a.h--}}this.F=null},De.prototype.K=function(a,u,f,p){return this.i.add(String(a),u,!1,f,p)},De.prototype.L=function(a,u,f,p){return this.i.add(String(a),u,!0,f,p)};function hi(a,u,f,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var x=!0,S=0;S<u.length;++S){var V=u[S];if(V&&!V.da&&V.capture==f){var ue=V.listener,Ae=V.ha||V.src;V.fa&&lo(a.i,V),x=ue.call(Ae,p)!==!1&&x}}return x&&!p.defaultPrevented}function Yl(a,u,f){if(typeof a=="function")f&&(a=w(a,f));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ql(a){a.g=Yl(()=>{a.g=null,a.i&&(a.i=!1,Ql(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Eg extends Ht{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ql(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Br(a){Ht.call(this),this.h=a,this.g={}}k(Br,Ht);var Jl=[];function Xl(a){le(a.g,function(u,f){this.g.hasOwnProperty(f)&&mo(u)},a),a.g={}}Br.prototype.N=function(){Br.aa.N.call(this),Xl(this)},Br.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var yo=c.JSON.stringify,Tg=c.JSON.parse,bg=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function _o(){}_o.prototype.h=null;function eu(a){return a.h||(a.h=a.i())}function tu(){}var $r={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function vo(){Oe.call(this,"d")}k(vo,Oe);function wo(){Oe.call(this,"c")}k(wo,Oe);var En={},nu=null;function fi(){return nu=nu||new De}En.La="serverreachability";function ru(a){Oe.call(this,En.La,a)}k(ru,Oe);function qr(a){const u=fi();$e(u,new ru(u))}En.STAT_EVENT="statevent";function su(a,u){Oe.call(this,En.STAT_EVENT,a),this.stat=u}k(su,Oe);function qe(a){const u=fi();$e(u,new su(u,a))}En.Ma="timingevent";function iu(a,u){Oe.call(this,En.Ma,a),this.size=u}k(iu,Oe);function Wr(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function zr(){this.g=!0}zr.prototype.xa=function(){this.g=!1};function Ig(a,u,f,p,x,S){a.info(function(){if(a.g)if(S)for(var V="",ue=S.split("&"),Ae=0;Ae<ue.length;Ae++){var se=ue[Ae].split("=");if(1<se.length){var je=se[0];se=se[1];var Ve=je.split("_");V=2<=Ve.length&&Ve[1]=="type"?V+(je+"="+se+"&"):V+(je+"=redacted&")}}else V=null;else V=S;return"XMLHTTP REQ ("+p+") [attempt "+x+"]: "+u+`
`+f+`
`+V})}function xg(a,u,f,p,x,S,V){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+x+"]: "+u+`
`+f+`
`+S+" "+V})}function Xn(a,u,f,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Sg(a,f)+(p?" "+p:"")})}function Ag(a,u){a.info(function(){return"TIMEOUT: "+u})}zr.prototype.info=function(){};function Sg(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var p=f[a];if(!(2>p.length)){var x=p[1];if(Array.isArray(x)&&!(1>x.length)){var S=x[0];if(S!="noop"&&S!="stop"&&S!="close")for(var V=1;V<x.length;V++)x[V]=""}}}}return yo(f)}catch{return u}}var mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},au={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Eo;function pi(){}k(pi,_o),pi.prototype.g=function(){return new XMLHttpRequest},pi.prototype.i=function(){return{}},Eo=new pi;function Gt(a,u,f,p){this.j=a,this.i=u,this.l=f,this.R=p||1,this.U=new Br(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ou}function ou(){this.i=null,this.g="",this.h=!1}var cu={},To={};function bo(a,u,f){a.L=1,a.v=vi(Pt(u)),a.m=f,a.P=!0,lu(a,null)}function lu(a,u){a.F=Date.now(),gi(a),a.A=Pt(a.v);var f=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),bu(f.i,"t",p),a.C=0,f=a.j.J,a.h=new ou,a.g=Bu(a.j,f?u:null,!a.m),0<a.O&&(a.M=new Eg(w(a.Y,a,a.g),a.O)),u=a.U,f=a.g,p=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Jl[0]=x.toString()),x=Jl);for(var S=0;S<x.length;S++){var V=Hl(f,x[S],p||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),qr(),Ig(a.i,a.u,a.A,a.l,a.R,a.m)}Gt.prototype.ca=function(a){a=a.target;const u=this.M;u&&Ct(a)==3?u.j():this.Y(a)},Gt.prototype.Y=function(a){try{if(a==this.g)e:{const Ve=Ct(this.g);var u=this.g.Ba();const nr=this.g.Z();if(!(3>Ve)&&(Ve!=3||this.g&&(this.h.h||this.g.oa()||Nu(this.g)))){this.J||Ve!=4||u==7||(u==8||0>=nr?qr(3):qr(2)),Io(this);var f=this.g.Z();this.X=f;t:if(uu(this)){var p=Nu(this.g);a="";var x=p.length,S=Ct(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tn(this),Hr(this);var V="";break t}this.h.i=new c.TextDecoder}for(u=0;u<x;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(S&&u==x-1)});p.length=0,this.h.g+=a,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=f==200,xg(this.i,this.u,this.A,this.l,this.R,Ve,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ue,Ae=this.g;if((ue=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(ue)){var se=ue;break t}}se=null}if(f=se)Xn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,f);else{this.o=!1,this.s=3,qe(12),Tn(this),Hr(this);break e}}if(this.P){f=!0;let ot;for(;!this.J&&this.C<V.length;)if(ot=Rg(this,V),ot==To){Ve==4&&(this.s=4,qe(14),f=!1),Xn(this.i,this.l,null,"[Incomplete Response]");break}else if(ot==cu){this.s=4,qe(15),Xn(this.i,this.l,V,"[Invalid Chunk]"),f=!1;break}else Xn(this.i,this.l,ot,null),xo(this,ot);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ve!=4||V.length!=0||this.h.h||(this.s=1,qe(16),f=!1),this.o=this.o&&f,!f)Xn(this.i,this.l,V,"[Invalid Chunked Response]"),Tn(this),Hr(this);else if(0<V.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Po(je),je.M=!0,qe(11))}}else Xn(this.i,this.l,V,null),xo(this,V);Ve==4&&Tn(this),this.o&&!this.J&&(Ve==4?Mu(this.j,this):(this.o=!1,gi(this)))}else zg(this.g),f==400&&0<V.indexOf("Unknown SID")?(this.s=3,qe(12)):(this.s=0,qe(13)),Tn(this),Hr(this)}}}catch{}finally{}};function uu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Rg(a,u){var f=a.C,p=u.indexOf(`
`,f);return p==-1?To:(f=Number(u.substring(f,p)),isNaN(f)?cu:(p+=1,p+f>u.length?To:(u=u.slice(p,p+f),a.C=p+f,u)))}Gt.prototype.cancel=function(){this.J=!0,Tn(this)};function gi(a){a.S=Date.now()+a.I,du(a,a.I)}function du(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Wr(w(a.ba,a),u)}function Io(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Gt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ag(this.i,this.A),this.L!=2&&(qr(),qe(17)),Tn(this),this.s=2,Hr(this)):du(this,this.S-a)};function Hr(a){a.j.G==0||a.J||Mu(a.j,a)}function Tn(a){Io(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Xl(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function xo(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ao(f.h,a))){if(!a.K&&Ao(f.h,a)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var x=p;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)xi(f),bi(f);else break e;No(f),qe(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Wr(w(f.Za,f),6e3));if(1>=mu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else In(f,11)}else if((a.K||f.g==a)&&xi(f),!j(u))for(x=f.Da.g.parse(u),u=0;u<x.length;u++){let se=x[u];if(f.T=se[0],se=se[1],f.G==2)if(se[0]=="c"){f.K=se[1],f.ia=se[2];const je=se[3];je!=null&&(f.la=je,f.j.info("VER="+f.la));const Ve=se[4];Ve!=null&&(f.Aa=Ve,f.j.info("SVER="+f.Aa));const nr=se[5];nr!=null&&typeof nr=="number"&&0<nr&&(p=1.5*nr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const ot=a.g;if(ot){const Si=ot.g?ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Si){var S=p.h;S.g||Si.indexOf("spdy")==-1&&Si.indexOf("quic")==-1&&Si.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(So(S,S.h),S.h=null))}if(p.D){const Co=ot.g?ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Co&&(p.ya=Co,de(p.I,p.D,Co))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var V=a;if(p.qa=Uu(p,p.J?p.ia:null,p.W),V.K){pu(p.h,V);var ue=V,Ae=p.L;Ae&&(ue.I=Ae),ue.B&&(Io(ue),gi(ue)),p.g=V}else ju(p);0<f.i.length&&Ii(f)}else se[0]!="stop"&&se[0]!="close"||In(f,7);else f.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?In(f,7):ko(f):se[0]!="noop"&&f.l&&f.l.ta(se),f.v=0)}}qr(4)}catch{}}var kg=class{constructor(a,u){this.g=a,this.map=u}};function hu(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function fu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mu(a){return a.h?1:a.g?a.g.size:0}function Ao(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function So(a,u){a.g?a.g.add(u):a.h=u}function pu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function gu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return N(a.i)}function Ng(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],f=a.length,p=0;p<f;p++)u.push(a[p]);return u}u=[],f=0;for(p in a)u[f++]=a[p];return u}function Pg(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const p in a)u[f++]=p;return u}}}function yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=Pg(a),p=Ng(a),x=p.length,S=0;S<x;S++)u.call(void 0,p[S],f&&f[S],a)}var _u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cg(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var p=a[f].indexOf("="),x=null;if(0<=p){var S=a[f].substring(0,p);x=a[f].substring(p+1)}else S=a[f];u(S,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function bn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof bn){this.h=a.h,yi(this,a.j),this.o=a.o,this.g=a.g,_i(this,a.s),this.l=a.l;var u=a.i,f=new Zr;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),vu(this,f),this.m=a.m}else a&&(u=String(a).match(_u))?(this.h=!1,yi(this,u[1]||"",!0),this.o=Gr(u[2]||""),this.g=Gr(u[3]||"",!0),_i(this,u[4]),this.l=Gr(u[5]||"",!0),vu(this,u[6]||"",!0),this.m=Gr(u[7]||"")):(this.h=!1,this.i=new Zr(null,this.h))}bn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Kr(u,wu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Kr(u,wu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Kr(f,f.charAt(0)=="/"?jg:Dg,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Kr(f,Mg)),a.join("")};function Pt(a){return new bn(a)}function yi(a,u,f){a.j=f?Gr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function _i(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function vu(a,u,f){u instanceof Zr?(a.i=u,Lg(a.i,a.h)):(f||(u=Kr(u,Vg)),a.i=new Zr(u,a.h))}function de(a,u,f){a.i.set(u,f)}function vi(a){return de(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Gr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Kr(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Og),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Og(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var wu=/[#\/\?@]/g,Dg=/[#\?:]/g,jg=/[#\?]/g,Vg=/[#\?@]/g,Mg=/#/g;function Zr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Kt(a){a.g||(a.g=new Map,a.h=0,a.i&&Cg(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Zr.prototype,n.add=function(a,u){Kt(this),this.i=null,a=er(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function Eu(a,u){Kt(a),u=er(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Tu(a,u){return Kt(a),u=er(a,u),a.g.has(u)}n.forEach=function(a,u){Kt(this),this.g.forEach(function(f,p){f.forEach(function(x){a.call(u,x,p,this)},this)},this)},n.na=function(){Kt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const x=a[p];for(let S=0;S<x.length;S++)f.push(u[p])}return f},n.V=function(a){Kt(this);let u=[];if(typeof a=="string")Tu(this,a)&&(u=u.concat(this.g.get(er(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},n.set=function(a,u){return Kt(this),this.i=null,a=er(this,a),Tu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function bu(a,u,f){Eu(a,u),0<f.length&&(a.i=null,a.g.set(er(a,u),N(f)),a.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const S=encodeURIComponent(String(p)),V=this.V(p);for(p=0;p<V.length;p++){var x=S;V[p]!==""&&(x+="="+encodeURIComponent(String(V[p]))),a.push(x)}}return this.i=a.join("&")};function er(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Lg(a,u){u&&!a.j&&(Kt(a),a.i=null,a.g.forEach(function(f,p){var x=p.toLowerCase();p!=x&&(Eu(this,p),bu(this,x,f))},a)),a.j=u}function Fg(a,u){const f=new zr;if(c.Image){const p=new Image;p.onload=E(Zt,f,"TestLoadImage: loaded",!0,u,p),p.onerror=E(Zt,f,"TestLoadImage: error",!1,u,p),p.onabort=E(Zt,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=E(Zt,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function Ug(a,u){const f=new zr,p=new AbortController,x=setTimeout(()=>{p.abort(),Zt(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(S=>{clearTimeout(x),S.ok?Zt(f,"TestPingServer: ok",!0,u):Zt(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(x),Zt(f,"TestPingServer: error",!1,u)})}function Zt(a,u,f,p,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),p(f)}catch{}}function Bg(){this.g=new bg}function $g(a,u,f){const p=f||"";try{yu(a,function(x,S){let V=x;h(x)&&(V=yo(x)),u.push(p+S+"="+encodeURIComponent(V))})}catch(x){throw u.push(p+"type="+encodeURIComponent("_badmap")),x}}function wi(a){this.l=a.Ub||null,this.j=a.eb||!1}k(wi,_o),wi.prototype.g=function(){return new Ei(this.l,this.j)},wi.prototype.i=function(a){return function(){return a}}({});function Ei(a,u){De.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Ei,De),n=Ei.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Qr(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Qr(this)),this.g&&(this.readyState=3,Qr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Iu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Iu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Yr(this):Qr(this),this.readyState==3&&Iu(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,Yr(this))},n.Qa=function(a){this.g&&(this.response=a,Yr(this))},n.ga=function(){this.g&&Yr(this)};function Yr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Qr(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Qr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function xu(a){let u="";return le(a,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Ro(a,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=xu(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):de(a,u,f))}function ge(a){De.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ge,De);var qg=/^https?$/i,Wg=["POST","PUT"];n=ge.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Eo.g(),this.v=this.o?eu(this.o):eu(Eo),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){Au(this,S);return}if(a=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var x in p)f.set(x,p[x]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const S of p.keys())f.set(S,p.get(S));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(S=>S.toLowerCase()=="content-type"),x=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Wg,u,void 0))||p||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,V]of f)this.g.setRequestHeader(S,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ku(this),this.u=!0,this.g.send(a),this.u=!1}catch(S){Au(this,S)}};function Au(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Su(a),Ti(a)}function Su(a){a.A||(a.A=!0,$e(a,"complete"),$e(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,$e(this,"complete"),$e(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),ge.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},n.bb=function(){Ru(this)};function Ru(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Ct(a)!=4||a.Z()!=2)){if(a.u&&Ct(a)==4)Yl(a.Ea,0,a);else if($e(a,"readystatechange"),Ct(a)==4){a.h=!1;try{const V=a.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=V===0){var x=String(a.D).match(_u)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),p=!qg.test(x?x.toLowerCase():"")}f=p}if(f)$e(a,"complete"),$e(a,"success");else{a.m=6;try{var S=2<Ct(a)?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.Z()+"]",Su(a)}}finally{Ti(a)}}}}function Ti(a,u){if(a.g){ku(a);const f=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||$e(a,"ready");try{f.onreadystatechange=p}catch{}}}function ku(a){a.I&&(c.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function Ct(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<Ct(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Tg(u)}};function Nu(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function zg(a){const u={};a=(a.g&&2<=Ct(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(j(a[p]))continue;var f=I(a[p]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const S=u[x]||[];u[x]=S,S.push(f)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jr(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function Pu(a){this.Aa=0,this.i=[],this.j=new zr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jr("baseRetryDelayMs",5e3,a),this.cb=Jr("retryDelaySeedMs",1e4,a),this.Wa=Jr("forwardChannelMaxRetries",2,a),this.wa=Jr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new hu(a&&a.concurrentRequestLimit),this.Da=new Bg,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Pu.prototype,n.la=8,n.G=1,n.connect=function(a,u,f,p){qe(0),this.W=a,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Uu(this,null,this.W),Ii(this)};function ko(a){if(Cu(a),a.G==3){var u=a.U++,f=Pt(a.I);if(de(f,"SID",a.K),de(f,"RID",u),de(f,"TYPE","terminate"),Xr(a,f),u=new Gt(a,a.j,u),u.L=2,u.v=vi(Pt(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Bu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),gi(u)}Fu(a)}function bi(a){a.g&&(Po(a),a.g.cancel(),a.g=null)}function Cu(a){bi(a),a.u&&(c.clearTimeout(a.u),a.u=null),xi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ii(a){if(!fu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Lr||zl(),Fr||(Lr(),Fr=!0),co.add(u,a),a.B=0}}function Hg(a,u){return mu(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Wr(w(a.Ga,a,u),Lu(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new Gt(this,this.j,a);let S=this.o;if(this.S&&(S?(S=y(S),T(S,this.S)):S=this.S),this.m!==null||this.O||(x.H=S,S=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Du(this,x,u),f=Pt(this.I),de(f,"RID",a),de(f,"CVER",22),this.D&&de(f,"X-HTTP-Session-Id",this.D),Xr(this,f),S&&(this.O?u="headers="+encodeURIComponent(String(xu(S)))+"&"+u:this.m&&Ro(f,this.m,S)),So(this.h,x),this.Ua&&de(f,"TYPE","init"),this.P?(de(f,"$req",u),de(f,"SID","null"),x.T=!0,bo(x,f,null)):bo(x,f,u),this.G=2}}else this.G==3&&(a?Ou(this,a):this.i.length==0||fu(this.h)||Ou(this))};function Ou(a,u){var f;u?f=u.l:f=a.U++;const p=Pt(a.I);de(p,"SID",a.K),de(p,"RID",f),de(p,"AID",a.T),Xr(a,p),a.m&&a.o&&Ro(p,a.m,a.o),f=new Gt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Du(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),So(a.h,f),bo(f,p,u)}function Xr(a,u){a.H&&le(a.H,function(f,p){de(u,p,f)}),a.l&&yu({},function(f,p){de(u,p,f)})}function Du(a,u,f){f=Math.min(a.i.length,f);var p=a.l?w(a.l.Na,a.l,a):null;e:{var x=a.i;let S=-1;for(;;){const V=["count="+f];S==-1?0<f?(S=x[0].g,V.push("ofs="+S)):S=0:V.push("ofs="+S);let ue=!0;for(let Ae=0;Ae<f;Ae++){let se=x[Ae].g;const je=x[Ae].map;if(se-=S,0>se)S=Math.max(0,x[Ae].g-100),ue=!1;else try{$g(je,V,"req"+se+"_")}catch{p&&p(je)}}if(ue){p=V.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,p}function ju(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Lr||zl(),Fr||(Lr(),Fr=!0),co.add(u,a),a.v=0}}function No(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Wr(w(a.Fa,a),Lu(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Vu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Wr(w(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,qe(10),bi(this),Vu(this))};function Po(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Vu(a){a.g=new Gt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=Pt(a.qa);de(u,"RID","rpc"),de(u,"SID",a.K),de(u,"AID",a.T),de(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&de(u,"TO",a.ja),de(u,"TYPE","xmlhttp"),Xr(a,u),a.m&&a.o&&Ro(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=vi(Pt(u)),f.m=null,f.P=!0,lu(f,a)}n.Za=function(){this.C!=null&&(this.C=null,bi(this),No(this),qe(19))};function xi(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Mu(a,u){var f=null;if(a.g==u){xi(a),Po(a),a.g=null;var p=2}else if(Ao(a.h,u))f=u.D,pu(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var x=a.B;p=fi(),$e(p,new iu(p,f)),Ii(a)}else ju(a);else if(x=u.s,x==3||x==0&&0<u.X||!(p==1&&Hg(a,u)||p==2&&No(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),x){case 1:In(a,5);break;case 4:In(a,10);break;case 3:In(a,6);break;default:In(a,2)}}}function Lu(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function In(a,u){if(a.j.info("Error code "+u),u==2){var f=w(a.fb,a),p=a.Xa;const x=!p;p=new bn(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||yi(p,"https"),vi(p),x?Fg(p.toString(),f):Ug(p.toString(),f)}else qe(2);a.G=0,a.l&&a.l.sa(u),Fu(a),Cu(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function Fu(a){if(a.G=0,a.ka=[],a.l){const u=gu(a.h);(u.length!=0||a.i.length!=0)&&(C(a.ka,u),C(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function Uu(a,u,f){var p=f instanceof bn?Pt(f):new bn(f);if(p.g!="")u&&(p.g=u+"."+p.g),_i(p,p.s);else{var x=c.location;p=x.protocol,u=u?u+"."+x.hostname:x.hostname,x=+x.port;var S=new bn(null);p&&yi(S,p),u&&(S.g=u),x&&_i(S,x),f&&(S.l=f),p=S}return f=a.D,u=a.ya,f&&u&&de(p,f,u),de(p,"VER",a.la),Xr(a,p),p}function Bu(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new ge(new wi({eb:f})):new ge(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function $u(){}n=$u.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ai(){}Ai.prototype.g=function(a,u){return new Ze(a,u)};function Ze(a,u){De.call(this),this.g=new Pu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new tr(this)}k(Ze,De),Ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ze.prototype.close=function(){ko(this.g)},Ze.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=yo(a),a=f);u.i.push(new kg(u.Ya++,a)),u.G==3&&Ii(u)},Ze.prototype.N=function(){this.g.l=null,delete this.j,ko(this.g),delete this.g,Ze.aa.N.call(this)};function qu(a){vo.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}k(qu,vo);function Wu(){wo.call(this),this.status=1}k(Wu,wo);function tr(a){this.g=a}k(tr,$u),tr.prototype.ua=function(){$e(this.g,"a")},tr.prototype.ta=function(a){$e(this.g,new qu(a))},tr.prototype.sa=function(a){$e(this.g,new Wu)},tr.prototype.ra=function(){$e(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,Ze.prototype.send=Ze.prototype.o,Ze.prototype.open=Ze.prototype.m,Ze.prototype.close=Ze.prototype.close,am=function(){return new Ai},im=function(){return fi()},sm=En,wc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,qi=mi,au.COMPLETE="complete",rm=au,tu.EventType=$r,$r.OPEN="a",$r.CLOSE="b",$r.ERROR="c",$r.MESSAGE="d",De.prototype.listen=De.prototype.K,cs=tu,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,nm=ge}).apply(typeof Ni<"u"?Ni:typeof self<"u"?self:typeof window<"u"?window:{});const Pd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Le.UNAUTHENTICATED=new Le(null),Le.GOOGLE_CREDENTIALS=new Le("google-credentials-uid"),Le.FIRST_PARTY=new Le("first-party-uid"),Le.MOCK_USER=new Le("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new ja("@firebase/firestore");function es(){return Ln.logLevel}function B(n,...e){if(Ln.logLevel<=te.DEBUG){const t=e.map(nl);Ln.debug(`Firestore (${Or}): ${n}`,...t)}}function $t(n,...e){if(Ln.logLevel<=te.ERROR){const t=e.map(nl);Ln.error(`Firestore (${Or}): ${n}`,...t)}}function Er(n,...e){if(Ln.logLevel<=te.WARN){const t=e.map(nl);Ln.warn(`Firestore (${Or}): ${n}`,...t)}}function nl(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Or}) INTERNAL ASSERTION FAILED: `+n;throw $t(e),new Error(e)}function oe(n,e){n||K()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Le.UNAUTHENTICATED))}shutdown(){}}class IE{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xE{constructor(e){this.t=e,this.currentUser=Le.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){oe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new Ft;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ft,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ft)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new om(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Le(e)}}class AE{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Le.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class SE{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new AE(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Le.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kE{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){oe(this.o===void 0);const r=i=>{i.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new RE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=NE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function ie(n,e){return n<e?-1:n>e?1:0}function Tr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return be.fromMillis(Date.now())}static fromDate(e){return be.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new be(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ie(this.nanoseconds,e.nanoseconds):ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new be(0,0))}static max(){return new Z(new be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return As.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof As?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class he extends As{construct(e,t,r){return new he(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new he(t)}static emptyPath(){return new he([])}}const PE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Re extends As{construct(e,t,r){return new Re(e,t,r)}static isValidIdentifier(e){return PE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Re.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Re(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new U(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Re(t)}static emptyPath(){return new Re([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(he.fromString(e))}static fromName(e){return new W(he.fromString(e).popFirst(5))}static empty(){return new W(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return he.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new he(e.slice()))}}function CE(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new be(t+1,0):new be(t,r));return new cn(s,W.empty(),e)}function OE(n){return new cn(n.readTime,n.key,-1)}class cn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new cn(Z.min(),W.empty(),-1)}static max(){return new cn(Z.max(),W.empty(),-1)}}function DE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:ie(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==jE)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>r(l))}),o=!0,i===s&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(s=>s?O.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new O((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next(m=>{o[h]=m,++c,c===i&&r(o)},m=>s(m))}})}static doWhile(e,t){return new O((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function ME(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ei(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}rl.oe=-1;function Ua(n){return n==null}function ia(n){return n===0&&1/n==-1/0}function LE(n){return typeof n=="number"&&Number.isInteger(n)&&!ia(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Pi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Pi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Pi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Pi(this.root,e,this.comparator,!0)}}class Pi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Se.RED,this.left=s??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Se(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,s,i){return this}insert(e,t,r){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ne)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ne(this.comparator);return t.data=e,t}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.fields=e,e.sort(Re.comparator)}static empty(){return new Ye([])}unionWith(e){let t=new Ne(Re.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ye(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Tr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new um("Invalid base64 string: "+i):i}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const FE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ln(n){if(oe(!!n),typeof n=="string"){let e=0;const t=FE.exec(n);if(oe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Fn(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function il(n){const e=n.mapValue.fields.__previous_value__;return sl(e)?il(e):e}function Ss(n){const e=ln(n.mapValue.fields.__local_write_time__.timestampValue);return new be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(e,t,r,s,i,o,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class Rs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Rs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Rs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Un(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?sl(n)?4:$E(n)?9007199254740991:BE(n)?10:11:K()}function xt(n,e){if(n===e)return!0;const t=Un(n);if(t!==Un(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ss(n).isEqual(Ss(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ln(s.timestampValue),c=ln(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Fn(s.bytesValue).isEqual(Fn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return ye(s.geoPointValue.latitude)===ye(i.geoPointValue.latitude)&&ye(s.geoPointValue.longitude)===ye(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ye(s.integerValue)===ye(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ye(s.doubleValue),c=ye(i.doubleValue);return o===c?ia(o)===ia(c):isNaN(o)&&isNaN(c)}return!1}(n,e);case 9:return Tr(n.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Cd(o)!==Cd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!xt(o[l],c[l])))return!1;return!0}(n,e);default:return K()}}function ks(n,e){return(n.values||[]).find(t=>xt(t,e))!==void 0}function br(n,e){if(n===e)return 0;const t=Un(n),r=Un(e);if(t!==r)return ie(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ie(n.booleanValue,e.booleanValue);case 2:return function(i,o){const c=ye(i.integerValue||i.doubleValue),l=ye(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(n,e);case 3:return Dd(n.timestampValue,e.timestampValue);case 4:return Dd(Ss(n),Ss(e));case 5:return ie(n.stringValue,e.stringValue);case 6:return function(i,o){const c=Fn(i),l=Fn(o);return c.compareTo(l)}(n.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const m=ie(c[h],l[h]);if(m!==0)return m}return ie(c.length,l.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ie(ye(i.latitude),ye(o.latitude));return c!==0?c:ie(ye(i.longitude),ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return jd(n.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,h,m;const g=i.fields||{},w=o.fields||{},E=(c=g.value)===null||c===void 0?void 0:c.arrayValue,k=(l=w.value)===null||l===void 0?void 0:l.arrayValue,N=ie(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((m=k==null?void 0:k.values)===null||m===void 0?void 0:m.length)||0);return N!==0?N:jd(E,k)}(n.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ci.mapValue&&o===Ci.mapValue)return 0;if(i===Ci.mapValue)return 1;if(o===Ci.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},m=Object.keys(h);l.sort(),m.sort();for(let g=0;g<l.length&&g<m.length;++g){const w=ie(l[g],m[g]);if(w!==0)return w;const E=br(c[l[g]],h[m[g]]);if(E!==0)return E}return ie(l.length,m.length)}(n.mapValue,e.mapValue);default:throw K()}}function Dd(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ie(n,e);const t=ln(n),r=ln(e),s=ie(t.seconds,r.seconds);return s!==0?s:ie(t.nanos,r.nanos)}function jd(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=br(t[s],r[s]);if(i)return i}return ie(t.length,r.length)}function Ir(n){return Ec(n)}function Ec(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=ln(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Fn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Ec(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ec(t.fields[o])}`;return s+"}"}(n.mapValue):K()}function Vd(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Tc(n){return!!n&&"integerValue"in n}function al(n){return!!n&&"arrayValue"in n}function Md(n){return!!n&&"nullValue"in n}function Ld(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wi(n){return!!n&&"mapValue"in n}function BE(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ps(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ps(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ps(n.arrayValue.values[t]);return e}return Object.assign({},n)}function $E(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ps(t)}setAll(e){let t=Re.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}o?r[c.lastSegment()]=ps(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Wi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Wi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Yn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new He(ps(this.value))}}function dm(n){const e=[];return Yn(n.fields,(t,r)=>{const s=new Re([t]);if(Wi(r)){const i=dm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ye(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,s,i,o,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Fe(e,0,Z.min(),Z.min(),Z.min(),He.empty(),0)}static newFoundDocument(e,t,r,s){return new Fe(e,1,t,Z.min(),r,s,0)}static newNoDocument(e,t){return new Fe(e,2,t,Z.min(),Z.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,Z.min(),Z.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,t){this.position=e,this.inclusive=t}}function Fd(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),t.key):r=br(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ud(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function qE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{}class Ee extends hm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new zE(e,t,r):t==="array-contains"?new KE(e,r):t==="in"?new ZE(e,r):t==="not-in"?new YE(e,r):t==="array-contains-any"?new QE(e,r):new Ee(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new HE(e,r):new GE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(br(t,this.value)):t!==null&&Un(this.value)===Un(t)&&this.matchesComparison(br(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gt extends hm{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new gt(e,t)}matches(e){return fm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fm(n){return n.op==="and"}function mm(n){return WE(n)&&fm(n)}function WE(n){for(const e of n.filters)if(e instanceof gt)return!1;return!0}function bc(n){if(n instanceof Ee)return n.field.canonicalString()+n.op.toString()+Ir(n.value);if(mm(n))return n.filters.map(e=>bc(e)).join(",");{const e=n.filters.map(t=>bc(t)).join(",");return`${n.op}(${e})`}}function pm(n,e){return n instanceof Ee?function(r,s){return s instanceof Ee&&r.op===s.op&&r.field.isEqual(s.field)&&xt(r.value,s.value)}(n,e):n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&pm(o,s.filters[c]),!0):!1}(n,e):void K()}function gm(n){return n instanceof Ee?function(t){return`${t.field.canonicalString()} ${t.op} ${Ir(t.value)}`}(n):n instanceof gt?function(t){return t.op.toString()+" {"+t.getFilters().map(gm).join(" ,")+"}"}(n):"Filter"}class zE extends Ee{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class HE extends Ee{constructor(e,t){super(e,"in",t),this.keys=ym("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class GE extends Ee{constructor(e,t){super(e,"not-in",t),this.keys=ym("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ym(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class KE extends Ee{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return al(t)&&ks(t.arrayValue,this.value)}}class ZE extends Ee{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ks(this.value.arrayValue,t)}}class YE extends Ee{constructor(e,t){super(e,"not-in",t)}matches(e){if(ks(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ks(this.value.arrayValue,t)}}class QE extends Ee{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!al(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ks(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Bd(n,e=null,t=[],r=[],s=null,i=null,o=null){return new JE(n,e,t,r,s,i,o)}function ol(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>bc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ua(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Ir(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Ir(r)).join(",")),e.ue=t}return e.ue}function cl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!qE(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!pm(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ud(n.startAt,e.startAt)&&Ud(n.endAt,e.endAt)}function Ic(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,t=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function XE(n,e,t,r,s,i,o,c){return new ti(n,e,t,r,s,i,o,c)}function ll(n){return new ti(n)}function $d(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _m(n){return n.collectionGroup!==null}function gs(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Ne(Re.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new oa(i,r))}),t.has(Re.keyField().canonicalString())||e.ce.push(new oa(Re.keyField(),r))}return e.ce}function Tt(n){const e=Y(n);return e.le||(e.le=eT(e,gs(n))),e.le}function eT(n,e){if(n.limitType==="F")return Bd(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new oa(s.field,i)});const t=n.endAt?new aa(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new aa(n.startAt.position,n.startAt.inclusive):null;return Bd(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function xc(n,e){const t=n.filters.concat([e]);return new ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ac(n,e,t){return new ti(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ba(n,e){return cl(Tt(n),Tt(e))&&n.limitType===e.limitType}function vm(n){return`${ol(Tt(n))}|lt:${n.limitType}`}function sr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>gm(s)).join(", ")}]`),Ua(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Ir(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Ir(s)).join(",")),`Target(${r})`}(Tt(n))}; limitType=${n.limitType})`}function $a(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):W.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=Fd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,gs(r),s)||r.endAt&&!function(o,c,l){const h=Fd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,gs(r),s))}(n,e)}function tT(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function wm(n){return(e,t)=>{let r=!1;for(const s of gs(n)){const i=nT(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nT(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?br(l,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Yn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return lm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=new pe(W.comparator);function qt(){return rT}const Em=new pe(W.comparator);function ls(...n){let e=Em;for(const t of n)e=e.insert(t.key,t);return e}function Tm(n){let e=Em;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function kn(){return ys()}function bm(){return ys()}function ys(){return new Dr(n=>n.toString(),(n,e)=>n.isEqual(e))}const sT=new pe(W.comparator),iT=new Ne(W.comparator);function ee(...n){let e=iT;for(const t of n)e=e.add(t);return e}const aT=new Ne(ie);function oT(){return aT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ul(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function Im(n){return{integerValue:""+n}}function cT(n,e){return LE(e)?Im(e):ul(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(){this._=void 0}}function lT(n,e,t){return n instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sl(i)&&(i=il(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):n instanceof Ns?Am(n,e):n instanceof Ps?Sm(n,e):function(s,i){const o=xm(s,i),c=qd(o)+qd(s.Pe);return Tc(o)&&Tc(s.Pe)?Im(c):ul(s.serializer,c)}(n,e)}function uT(n,e,t){return n instanceof Ns?Am(n,e):n instanceof Ps?Sm(n,e):t}function xm(n,e){return n instanceof la?function(r){return Tc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends qa{}class Ns extends qa{constructor(e){super(),this.elements=e}}function Am(n,e){const t=Rm(e);for(const r of n.elements)t.some(s=>xt(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ps extends qa{constructor(e){super(),this.elements=e}}function Sm(n,e){let t=Rm(e);for(const r of n.elements)t=t.filter(s=>!xt(s,r));return{arrayValue:{values:t}}}class la extends qa{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function qd(n){return ye(n.integerValue||n.doubleValue)}function Rm(n){return al(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function dT(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof Ns&&s instanceof Ns||r instanceof Ps&&s instanceof Ps?Tr(r.elements,s.elements,xt):r instanceof la&&s instanceof la?xt(r.Pe,s.Pe):r instanceof ca&&s instanceof ca}(n.transform,e.transform)}class hT{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wa{}function km(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new dl(n.key,rt.none()):new ni(n.key,n.data,rt.none());{const t=n.data,r=He.empty();let s=new Ne(Re.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new wn(n.key,r,new Ye(s.toArray()),rt.none())}}function fT(n,e,t){n instanceof ni?function(s,i,o){const c=s.value.clone(),l=zd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):n instanceof wn?function(s,i,o){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=zd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Nm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function _s(n,e,t,r){return n instanceof ni?function(i,o,c,l){if(!zi(i.precondition,o))return c;const h=i.value.clone(),m=Hd(i.fieldTransforms,l,o);return h.setAll(m),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof wn?function(i,o,c,l){if(!zi(i.precondition,o))return c;const h=Hd(i.fieldTransforms,l,o),m=o.data;return m.setAll(Nm(i)),m.setAll(h),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,o,c){return zi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(n,e,t)}function mT(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xm(r.transform,s||null);i!=null&&(t===null&&(t=He.empty()),t.set(r.field,i))}return t||null}function Wd(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Tr(r,s,(i,o)=>dT(i,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ni extends Wa{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wn extends Wa{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nm(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function zd(n,e,t){const r=new Map;oe(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,uT(o,c,t[s]))}return r}function Hd(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,lT(i,o,e))}return r}class dl extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pT extends Wa{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&fT(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=_s(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=bm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=km(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&Tr(this.mutations,e.mutations,(t,r)=>Wd(t,r))&&Tr(this.baseMutations,e.baseMutations,(t,r)=>Wd(t,r))}}class hl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){oe(e.mutations.length===r.length);let s=function(){return sT}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hl(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var we,ne;function vT(n){switch(n){default:return K();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function Pm(n){if(n===void 0)return $t("GRPC error has no .code"),P.UNKNOWN;switch(n){case we.OK:return P.OK;case we.CANCELLED:return P.CANCELLED;case we.UNKNOWN:return P.UNKNOWN;case we.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case we.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case we.INTERNAL:return P.INTERNAL;case we.UNAVAILABLE:return P.UNAVAILABLE;case we.UNAUTHENTICATED:return P.UNAUTHENTICATED;case we.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case we.NOT_FOUND:return P.NOT_FOUND;case we.ALREADY_EXISTS:return P.ALREADY_EXISTS;case we.PERMISSION_DENIED:return P.PERMISSION_DENIED;case we.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case we.ABORTED:return P.ABORTED;case we.OUT_OF_RANGE:return P.OUT_OF_RANGE;case we.UNIMPLEMENTED:return P.UNIMPLEMENTED;case we.DATA_LOSS:return P.DATA_LOSS;default:return K()}}(ne=we||(we={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=new Cn([4294967295,4294967295],0);function Gd(n){const e=wT().encode(n),t=new tm;return t.update(e),new Uint8Array(t.digest())}function Kd(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([t,r],0),new Cn([s,i],0)]}class fl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Cn.fromNumber(this.Ie)}Ee(e,t,r){let s=e.add(t.multiply(Cn.fromNumber(r)));return s.compare(ET)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Gd(e),[r,s]=Kd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fl(i,s,t);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const t=Gd(e),[r,s]=Kd(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,ri.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new za(Z.min(),s,new pe(ie),qt(),ee())}}class ri{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ri(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t,r,s){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=s}}class Cm{constructor(e,t){this.targetId=e,this.me=t}}class Om{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Zd{constructor(){this.fe=0,this.ge=Qd(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:K()}}),new ri(this.pe,this.ye,e,t,r)}Ce(){this.we=!1,this.ge=Qd()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TT{constructor(e){this.Le=e,this.Be=new Map,this.ke=qt(),this.qe=Yd(),this.Qe=new pe(ie)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,s)=>{this.ze(s)&&t(s)})}He(e){const t=e.targetId,r=e.me.count,s=this.Je(t);if(s){const i=s.target;if(Ic(i))if(r===0){const o=new W(i.path);this.Ue(t,o,Fe.newNoDocument(o,Z.min()))}else oe(r===1);else{const o=this.Ye(t);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=Fn(r).toUint8Array()}catch(l){if(l instanceof um)return Er("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fl(o,s,i)}catch(l){return Er(l instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(t,i,null),s++)}),s}rt(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Ic(c.target)){const l=new W(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Fe.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let r=ee();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new za(e,t,this.Qe,this.ke,r);return this.ke=qt(),this.qe=Yd(),this.Qe=new pe(ie),s}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,t)?s.Fe(t,1):s.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Zd,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ne(ie),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Zd),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Yd(){return new pe(W.comparator)}function Qd(){return new pe(W.comparator)}const bT={asc:"ASCENDING",desc:"DESCENDING"},IT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},xT={and:"AND",or:"OR"};class AT{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sc(n,e){return n.useProto3Json||Ua(e)?e:{value:e}}function ua(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dm(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ST(n,e){return ua(n,e.toTimestamp())}function bt(n){return oe(!!n),Z.fromTimestamp(function(t){const r=ln(t);return new be(r.seconds,r.nanos)}(n))}function ml(n,e){return Rc(n,e).canonicalString()}function Rc(n,e){const t=function(s){return new he(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function jm(n){const e=he.fromString(n);return oe(Um(e)),e}function kc(n,e){return ml(n.databaseId,e.path)}function Ho(n,e){const t=jm(e);if(t.get(1)!==n.databaseId.projectId)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new U(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(Mm(t))}function Vm(n,e){return ml(n.databaseId,e)}function RT(n){const e=jm(n);return e.length===4?he.emptyPath():Mm(e)}function Nc(n){return new he(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mm(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jd(n,e,t){return{name:kc(n,e),fields:t.value.mapValue.fields}}function kT(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,m){return h.useProto3Json?(oe(m===void 0||typeof m=="string"),Pe.fromBase64String(m||"")):(oe(m===void 0||m instanceof Buffer||m instanceof Uint8Array),Pe.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const m=h.code===void 0?P.UNKNOWN:Pm(h.code);return new U(m,h.message||"")}(o);t=new Om(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ho(n,r.document.name),i=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):Z.min(),c=new He({mapValue:{fields:r.document.fields}}),l=Fe.newFoundDocument(s,i,o,c),h=r.targetIds||[],m=r.removedTargetIds||[];t=new Hi(h,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ho(n,r.document),i=r.readTime?bt(r.readTime):Z.min(),o=Fe.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Hi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ho(n,r.document),i=r.removedTargetIds||[];t=new Hi([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new _T(s,i),c=r.targetId;t=new Cm(c,o)}}return t}function NT(n,e){let t;if(e instanceof ni)t={update:Jd(n,e.key,e.value)};else if(e instanceof dl)t={delete:kc(n,e.key)};else if(e instanceof wn)t={update:Jd(n,e.key,e.data),updateMask:FT(e.fieldMask)};else{if(!(e instanceof pT))return K();t={verify:kc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ps)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof la)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ST(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(n,e.precondition)),t}function PT(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(s,i){let o=s.updateTime?bt(s.updateTime):bt(i);return o.isEqual(Z.min())&&(o=bt(i)),new hT(o,s.transformResults||[])}(t,e))):[]}function CT(n,e){return{documents:[Vm(n,e.path)]}}function OT(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Vm(n,s);const i=function(h){if(h.length!==0)return Fm(gt.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(m=>function(w){return{field:ir(w.field),direction:VT(w.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Sc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:s}}function DT(n){let e=RT(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){oe(r===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(g){const w=Lm(g);return w instanceof gt&&mm(w)?w.getFilters():[w]}(t.where));let o=[];t.orderBy&&(o=function(g){return g.map(w=>function(k){return new oa(ar(k.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(w))}(t.orderBy));let c=null;t.limit&&(c=function(g){let w;return w=typeof g=="object"?g.value:g,Ua(w)?null:w}(t.limit));let l=null;t.startAt&&(l=function(g){const w=!!g.before,E=g.values||[];return new aa(E,w)}(t.startAt));let h=null;return t.endAt&&(h=function(g){const w=!g.before,E=g.values||[];return new aa(E,w)}(t.endAt)),XE(e,s,o,i,c,"F",l,h)}function jT(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ar(t.unaryFilter.field);return Ee.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ar(t.unaryFilter.field);return Ee.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ar(t.unaryFilter.field);return Ee.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ar(t.unaryFilter.field);return Ee.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return Ee.create(ar(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return gt.create(t.compositeFilter.filters.map(r=>Lm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function VT(n){return bT[n]}function MT(n){return IT[n]}function LT(n){return xT[n]}function ir(n){return{fieldPath:n.canonicalString()}}function ar(n){return Re.fromServerFormat(n.fieldPath)}function Fm(n){return n instanceof Ee?function(t){if(t.op==="=="){if(Ld(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NAN"}};if(Md(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ld(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NAN"}};if(Md(t.value))return{unaryFilter:{field:ir(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ir(t.field),op:MT(t.op),value:t.value}}}(n):n instanceof gt?function(t){const r=t.getFilters().map(s=>Fm(s));return r.length===1?r[0]:{compositeFilter:{op:LT(t.op),filters:r}}}(n):K()}function FT(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Um(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,r,s,i=Z.min(),o=Z.min(),c=Pe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e){this.ct=e}}function BT(n){const e=DT({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ac(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.un=new qT}addToCollectionParentIndex(e,t){return this.un.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.un.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(cn.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(cn.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class qT{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ne(he.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ne(he.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new xr(0)}static kn(){return new xr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(){this.changes=new Dr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&_s(r.mutation,s,Ye.empty(),be.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const s=kn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=ls();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=kn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,r,s){let i=qt();const o=ys(),c=function(){return ys()}();return t.forEach((l,h)=>{const m=r.get(h.key);s.has(h.key)&&(m===void 0||m.mutation instanceof wn)?i=i.insert(h.key,h):m!==void 0?(o.set(h.key,m.mutation.getFieldMask()),_s(m.mutation,h,m.mutation.getFieldMask(),be.now())):o.set(h.key,Ye.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,m)=>o.set(h,m)),t.forEach((h,m)=>{var g;return c.set(h,new zT(m,(g=o.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,t){const r=ys();let s=new pe((o,c)=>o-c),i=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=t.get(l);if(h===null)return;let m=r.get(l)||Ye.empty();m=c.applyToLocalView(h,m),r.set(l,m);const g=(s.get(c.batchId)||ee()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,m=l.value,g=bm();m.forEach(w=>{if(!i.has(w)){const E=km(t.get(w),r.get(w));E!==null&&g.set(w,E),i=i.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_m(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):O.resolve(kn());let c=-1,l=i;return o.next(h=>O.forEach(h,(m,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(m)?O.resolve():this.remoteDocumentCache.getEntry(e,m).next(w=>{l=l.insert(m,w)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,ee())).next(m=>({batchId:c,changes:Tm(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let s=ls();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let o=ls();return this.indexManager.getCollectionParents(e,i).next(c=>O.forEach(c,l=>{const h=function(g,w){return new ti(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(m=>{m.forEach((g,w)=>{o=o.insert(g,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(o=>{i.forEach((l,h)=>{const m=h.getKey();o.get(m)===null&&(o=o.insert(m,Fe.newInvalidDocument(m)))});let c=ls();return o.forEach((l,h)=>{const m=i.get(l);m!==void 0&&_s(m.mutation,h,Ye.empty(),be.now()),$a(t,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,t){return O.resolve(this.hr.get(t))}saveBundleMetadata(e,t){return this.hr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:bt(s.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.Pr.get(t))}saveNamedQuery(e,t){return this.Pr.set(t.name,function(s){return{name:s.name,query:BT(s.bundledQuery),readTime:bt(s.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(){this.overlays=new pe(W.comparator),this.Ir=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=kn();return O.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.ht(e,t,i)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const s=kn(),i=t.length+1,o=new W(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return O.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new pe((h,m)=>h-m);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let m=i.get(h.largestBatchId);m===null&&(m=kn(),i=i.insert(h.largestBatchId,m)),m.set(h.getKey(),h)}}const c=kn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,m)=>c.set(h,m)),!(c.size()>=s)););return O.resolve(c)}ht(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new yT(t,r));let i=this.Ir.get(t);i===void 0&&(i=ee(),this.Ir.set(t,i)),this.Ir.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.Tr=new Ne(xe.Er),this.dr=new Ne(xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,t){const r=new xe(e,t);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Vr(new xe(e,t))}mr(e,t){e.forEach(r=>this.removeReference(r,t))}gr(e){const t=new W(new he([])),r=new xe(t,e),s=new xe(t,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const t=new W(new he([])),r=new xe(t,e),s=new xe(t,e+1);let i=ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new xe(e,0),r=this.Tr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class xe{constructor(e,t){this.key=e,this.wr=t}static Er(e,t){return W.comparator(e.key,t.key)||ie(e.wr,t.wr)}static Ar(e,t){return ie(e.wr,t.wr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Sr=1,this.br=new Ne(xe.Er)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new gT(i,t,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new xe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,t){return O.resolve(this.Dr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.vr(r),i=s<0?0:s;return O.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new xe(t,0),s=new xe(t,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),O.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ne(ie);return t.forEach(s=>{const i=new xe(s,0),o=new xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;W.isDocumentKey(i)||(i=i.child(""));const o=new xe(new W(i),0);let c=new Ne(ie);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.wr)),!0)},o),O.resolve(this.Cr(c))}Cr(e){const t=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){oe(this.Fr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return O.forEach(t.mutations,s=>{const i=new xe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,t){const r=new xe(t,0),s=this.br.firstAfterOrEqual(r);return O.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Fr(e,t){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const t=this.vr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e){this.Mr=e,this.docs=function(){return new pe(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=qt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Fe.newInvalidDocument(s))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=qt();const o=t.path,c=new W(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:m}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||DE(OE(m),r)<=0||(s.has(m.key)||$a(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return O.resolve(i)}getAllFromCollectionGroup(e,t,r,s){K()}Or(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new JT(this)}getSize(e){return O.resolve(this.size)}}class JT extends WT{constructor(e){super(),this.cr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.cr.getEntry(e,t)}getAllFromCache(e,t){return this.cr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.persistence=e,this.Nr=new Dr(t=>ol(t),cl),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new pl,this.targetCount=0,this.kr=xr.Bn()}forEachTarget(e,t){return this.Nr.forEach((r,s)=>t(s)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Lr&&(this.Lr=t),O.resolve()}Kn(e){this.Nr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.kr=new xr(t),this.highestTargetId=t),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,t){return this.Kn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Kn(t),O.resolve()}removeTargetData(e,t){return this.Nr.delete(t.target),this.Br.gr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),O.waitFor(i).next(()=>s)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Nr.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Br.Rr(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Br.mr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),O.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.gr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Br.yr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Br.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e,t){this.qr={},this.overlays={},this.Qr=new rl(0),this.Kr=!1,this.Kr=!0,this.$r=new ZT,this.referenceDelegate=e(this),this.Ur=new XT(this),this.indexManager=new $T,this.remoteDocumentCache=function(s){return new QT(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new UT(t),this.Gr=new GT(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new KT,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.qr[e.toKey()];return r||(r=new YT(t,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const s=new tb(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,t){return O.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,t)))}}class tb extends VE{constructor(e){super(),this.currentSequenceNumber=e}}class gl{constructor(e){this.persistence=e,this.Jr=new pl,this.Yr=null}static Zr(e){return new gl(e)}get Xr(){if(this.Yr)return this.Yr;throw K()}addReference(e,t,r){return this.Jr.addReference(r,t),this.Xr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Jr.removeReference(r,t),this.Xr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Xr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Jr.gr(t.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}zr(){this.Yr=new Set}jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Xr,r=>{const s=W.fromPath(r);return this.ei(e,s).next(i=>{i||t.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ei(e,t).next(r=>{r?this.Xr.delete(t.toString()):this.Xr.add(t.toString())})}Wr(e){return 0}ei(e,t){return O.or([()=>O.resolve(this.Jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Hr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.$i=r,this.Ui=s}static Wi(e,t){let r=ee(),s=ee();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new yl(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return q_()?8:ME(Ue())>0?6:4}()}initialize(e,t){this.Ji=e,this.indexManager=t,this.Gi=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.Yi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,t,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new nb;return this.Xi(e,t,o).next(c=>{if(i.result=c,this.zi)return this.es(e,t,o,c.size)})}).next(()=>i.result)}es(e,t,r,s){return r.documentReadCount<this.ji?(es()<=te.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",sr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),O.resolve()):(es()<=te.DEBUG&&B("QueryEngine","Query:",sr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(es()<=te.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",sr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Tt(t))):O.resolve())}Yi(e,t){if($d(t))return O.resolve(null);let r=Tt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ac(t,null,"F"),r=Tt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ee(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(t,c);return this.ns(t,h,o,l.readTime)?this.Yi(e,Ac(t,null,"F")):this.rs(e,h,t,l)}))})))}Zi(e,t,r,s){return $d(t)||s.isEqual(Z.min())?O.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(t,i);return this.ns(t,o,r,s)?O.resolve(null):(es()<=te.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),sr(t)),this.rs(e,o,t,CE(s,-1)).next(c=>c))})}ts(e,t){let r=new Ne(wm(e));return t.forEach((s,i)=>{$a(e,i)&&(r=r.add(i))}),r}ns(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,t,r){return es()<=te.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",sr(t)),this.Ji.getDocumentsMatchingQuery(e,t,cn.min(),r)}rs(e,t,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,t,r,s){this.persistence=e,this.ss=t,this.serializer=s,this.os=new pe(ie),this._s=new Dr(i=>ol(i),cl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HT(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.os))}}function ib(n,e,t,r){return new sb(n,e,t,r)}async function Bm(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.ls(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ee();for(const h of s){o.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}for(const h of i){c.push(h.batchId);for(const m of h.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:c}))})})}function ab(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.cs.newChangeBuffer({trackRemovals:!0});return function(c,l,h,m){const g=h.batch,w=g.keys();let E=O.resolve();return w.forEach(k=>{E=E.next(()=>m.getEntry(l,k)).next(N=>{const C=h.docVersions.get(k);oe(C!==null),N.version.compareTo(C)<0&&(g.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),m.addEntry(N)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=ee();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function $m(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ur.getLastRemoteSnapshotVersion(t))}function ob(n,e){const t=Y(n),r=e.snapshotVersion;let s=t.os;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.cs.newChangeBuffer({trackRemovals:!0});s=t.os;const c=[];e.targetChanges.forEach((m,g)=>{const w=s.get(g);if(!w)return;c.push(t.Ur.removeMatchingKeys(i,m.removedDocuments,g).next(()=>t.Ur.addMatchingKeys(i,m.addedDocuments,g)));let E=w.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(Pe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,r)),s=s.insert(g,E),function(N,C,F){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(w,E,m)&&c.push(t.Ur.updateTargetData(i,E))});let l=qt(),h=ee();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(cb(i,o,e.documentUpdates).next(m=>{l=m.Ps,h=m.Is})),!r.isEqual(Z.min())){const m=t.Ur.getLastRemoteSnapshotVersion(i).next(g=>t.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(m)}return O.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(t.os=s,i))}function cb(n,e,t){let r=ee(),s=ee();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=qt();return t.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):B("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function lb(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ub(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ur.getTargetData(r,e).next(i=>i?(s=i,O.resolve(s)):t.Ur.allocateTargetId(r).next(o=>(s=new rn(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.os=t.os.insert(r.targetId,r),t._s.set(e,r.targetId)),r})}async function Pc(n,e,t){const r=Y(n),s=r.os.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ei(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Xd(n,e,t){const r=Y(n);let s=Z.min(),i=ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,m){const g=Y(l),w=g._s.get(m);return w!==void 0?O.resolve(g.os.get(w)):g.Ur.getTargetData(h,m)}(r,o,Tt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,t?s:Z.min(),t?i:ee())).next(c=>(db(r,tT(e),c),{documents:c,Ts:i})))}function db(n,e,t){let r=n.us.get(e)||Z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(e,r)}class eh{constructor(){this.activeTargetIds=oT()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hb{constructor(){this.so=new eh,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,t,r){this.oo[e]=t}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new eh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=null;function Go(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Me="WebChannelConnection";class gb extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+t.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(t,r,s,i,o){const c=Go(),l=this.xo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(t,l,h,s).then(m=>(B("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw Er("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",l,"request:",s),m})}Lo(t,r,s,i,o,c){return this.Mo(t,r,s,i,o)}Oo(t,r,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Or}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}xo(t,r){const s=mb[t];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,t,r,s){const i=Go();return new Promise((o,c)=>{const l=new nm;l.setWithCredentials(!0),l.listenOnce(rm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qi.NO_ERROR:const m=l.getResponseJson();B(Me,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case qi.TIMEOUT:B(Me,`RPC '${e}' ${i} timed out`),c(new U(P.DEADLINE_EXCEEDED,"Request time out"));break;case qi.HTTP_ERROR:const g=l.getStatus();if(B(Me,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let w=l.getResponseJson();Array.isArray(w)&&(w=w[0]);const E=w==null?void 0:w.error;if(E&&E.status&&E.message){const k=function(C){const F=C.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(F)>=0?F:P.UNKNOWN}(E.status);c(new U(k,E.message))}else c(new U(P.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new U(P.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B(Me,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);B(Me,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",h,r,15)})}Bo(e,t,r){const s=Go(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=am(),c=im(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const m=i.join("");B(Me,`Creating RPC '${e}' stream ${s}: ${m}`,l);const g=o.createWebChannel(m,l);let w=!1,E=!1;const k=new pb({Io:C=>{E?B(Me,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(w||(B(Me,`Opening RPC '${e}' stream ${s} transport.`),g.open(),w=!0),B(Me,`RPC '${e}' stream ${s} sending:`,C),g.send(C))},To:()=>g.close()}),N=(C,F,j)=>{C.listen(F,$=>{try{j($)}catch(J){setTimeout(()=>{throw J},0)}})};return N(g,cs.EventType.OPEN,()=>{E||(B(Me,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),N(g,cs.EventType.CLOSE,()=>{E||(E=!0,B(Me,`RPC '${e}' stream ${s} transport closed`),k.So())}),N(g,cs.EventType.ERROR,C=>{E||(E=!0,Er(Me,`RPC '${e}' stream ${s} transport errored:`,C),k.So(new U(P.UNAVAILABLE,"The operation could not be completed")))}),N(g,cs.EventType.MESSAGE,C=>{var F;if(!E){const j=C.data[0];oe(!!j);const $=j,J=$.error||((F=$[0])===null||F===void 0?void 0:F.error);if(J){B(Me,`RPC '${e}' stream ${s} received error:`,J);const ve=J.status;let le=function(v){const T=we[v];if(T!==void 0)return Pm(T)}(ve),b=J.message;le===void 0&&(le=P.INTERNAL,b="Unknown error status: "+ve+" with message "+J.message),E=!0,k.So(new U(le,b)),g.close()}else B(Me,`RPC '${e}' stream ${s} received:`,j),k.bo(j)}}),N(c,sm.STAT_EVENT,C=>{C.stat===wc.PROXY?B(Me,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===wc.NOPROXY&&B(Me,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function Ko(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(n){return new AT(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=t,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const t=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,t-r);s>0&&B("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e,t,r,s,i,o,c,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qm(e,t)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,t){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?($t(t.toString()),$t("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(t)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),t=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===t&&this.P_(r,s)},r=>{e(()=>{const s=new U(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,t){const r=this.h_(this.Yo);this.stream=this.T_(e,t),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return t=>{this.ui.enqueueAndForget(()=>this.Yo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yb extends Wm{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}T_(e,t){return this.connection.Bo("Listen",e,t)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const t=kT(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?bt(o.readTime):Z.min()}(e);return this.listener.d_(t,r)}A_(e){const t={};t.database=Nc(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=Ic(l)?{documents:CT(i,l)}:{query:OT(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Dm(i,o.resumeToken);const h=Sc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(Z.min())>0){c.readTime=ua(i,o.snapshotVersion.toTimestamp());const h=Sc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=jT(this.serializer,e);r&&(t.labels=r),this.a_(t)}R_(e){const t={};t.database=Nc(this.serializer),t.removeTarget=e,this.a_(t)}}class _b extends Wm{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,t){return this.connection.Bo("Write",e,t)}E_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const t=PT(e.writeResults,e.commitTime),r=bt(e.commitTime);return this.listener.g_(r,t)}p_(){const e={};e.database=Nc(this.serializer),this.a_(e)}m_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>NT(this.serializer,r))};this.a_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,t,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Rc(t,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(P.UNKNOWN,i.toString())})}Lo(e,t,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Rc(t,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(P.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class wb{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?($t(t),this.D_=!1):B("OnlineStateTracker",t)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Qn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=Y(l);h.L_.add(4),await si(h),h.q_.set("Unknown"),h.L_.delete(4),await Ga(h)}(this))})}),this.q_=new wb(r,s)}}async function Ga(n){if(Qn(n))for(const e of n.B_)await e(!0)}async function si(n){for(const e of n.B_)await e(!1)}function zm(n,e){const t=Y(n);t.N_.has(e.targetId)||(t.N_.set(e.targetId,e),El(t)?wl(t):jr(t).r_()&&vl(t,e))}function _l(n,e){const t=Y(n),r=jr(t);t.N_.delete(e),r.r_()&&Hm(t,e),t.N_.size===0&&(r.r_()?r.o_():Qn(t)&&t.q_.set("Unknown"))}function vl(n,e){if(n.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}jr(n).A_(e)}function Hm(n,e){n.Q_.xe(e),jr(n).R_(e)}function wl(n){n.Q_=new TT({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.N_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),jr(n).start(),n.q_.v_()}function El(n){return Qn(n)&&!jr(n).n_()&&n.N_.size>0}function Qn(n){return Y(n).L_.size===0}function Gm(n){n.Q_=void 0}async function Tb(n){n.q_.set("Online")}async function bb(n){n.N_.forEach((e,t)=>{vl(n,e)})}async function Ib(n,e){Gm(n),El(n)?(n.q_.M_(e),wl(n)):n.q_.set("Unknown")}async function xb(n,e,t){if(n.q_.set("Online"),e instanceof Om&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(n,r)}else if(e instanceof Hi?n.Q_.Ke(e):e instanceof Cm?n.Q_.He(e):n.Q_.We(e),!t.isEqual(Z.min()))try{const r=await $m(n.localStore);t.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.N_.get(h);m&&i.N_.set(h,m.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const m=i.N_.get(l);if(!m)return;i.N_.set(l,m.withResumeToken(Pe.EMPTY_BYTE_STRING,m.snapshotVersion)),Hm(i,l);const g=new rn(m.target,l,h,m.sequenceNumber);vl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await da(n,r)}}async function da(n,e,t){if(!ei(e))throw e;n.L_.add(1),await si(n),n.q_.set("Offline"),t||(t=()=>$m(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.L_.delete(1),await Ga(n)})}function Km(n,e){return e().catch(t=>da(n,t,e))}async function Ka(n){const e=Y(n),t=un(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Ab(e);)try{const s=await lb(e.localStore,r);if(s===null){e.O_.length===0&&t.o_();break}r=s.batchId,Sb(e,s)}catch(s){await da(e,s)}Zm(e)&&Ym(e)}function Ab(n){return Qn(n)&&n.O_.length<10}function Sb(n,e){n.O_.push(e);const t=un(n);t.r_()&&t.V_&&t.m_(e.mutations)}function Zm(n){return Qn(n)&&!un(n).n_()&&n.O_.length>0}function Ym(n){un(n).start()}async function Rb(n){un(n).p_()}async function kb(n){const e=un(n);for(const t of n.O_)e.m_(t.mutations)}async function Nb(n,e,t){const r=n.O_.shift(),s=hl.from(r,e,t);await Km(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ka(n)}async function Pb(n,e){e&&un(n).V_&&await async function(r,s){if(function(o){return vT(o)&&o!==P.ABORTED}(s.code)){const i=r.O_.shift();un(r).s_(),await Km(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ka(r)}}(n,e),Zm(n)&&Ym(n)}async function nh(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Qn(t);t.L_.add(3),await si(t),r&&t.q_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.L_.delete(3),await Ga(t)}async function Cb(n,e){const t=Y(n);e?(t.L_.delete(2),await Ga(t)):e||(t.L_.add(2),await si(t),t.q_.set("Unknown"))}function jr(n){return n.K_||(n.K_=function(t,r,s){const i=Y(t);return i.w_(),new yb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Tb.bind(null,n),Ro:bb.bind(null,n),mo:Ib.bind(null,n),d_:xb.bind(null,n)}),n.B_.push(async e=>{e?(n.K_.s_(),El(n)?wl(n):n.q_.set("Unknown")):(await n.K_.stop(),Gm(n))})),n.K_}function un(n){return n.U_||(n.U_=function(t,r,s){const i=Y(t);return i.w_(),new _b(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Rb.bind(null,n),mo:Pb.bind(null,n),f_:kb.bind(null,n),g_:Nb.bind(null,n)}),n.B_.push(async e=>{e?(n.U_.s_(),await Ka(n)):(await n.U_.stop(),n.O_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.O_.length} pending writes`),n.O_=[]))})),n.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Ft,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,c=new Tl(e,t,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function bl(n,e){if($t("AsyncQueue",`${e}: ${n}`),ei(n))return new U(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=ls(),this.sortedSet=new pe(this.comparator)}static emptySet(e){return new mr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new mr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(){this.W_=new pe(W.comparator)}track(e){const t=e.doc.key,r=this.W_.get(t);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(t,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(t):e.type===1&&r.type===2?this.W_=this.W_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(t,{type:2,doc:e.doc}):K():this.W_=this.W_.insert(t,e)}G_(){const e=[];return this.W_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ar{constructor(e,t,r,s,i,o,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new Ar(e,t,mr.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ba(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class Db{constructor(){this.queries=sh(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(t,r){const s=Y(t),i=s.queries;s.queries=sh(),i.forEach((o,c)=>{for(const l of c.j_)l.onError(r)})})(this,new U(P.ABORTED,"Firestore shutting down"))}}function sh(){return new Dr(n=>vm(n),Ba)}async function Qm(n,e){const t=Y(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new Ob,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await t.onListen(s,!0);break;case 1:i.z_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=bl(o,`Initialization of query '${sr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.j_.push(e),e.Z_(t.onlineState),i.z_&&e.X_(i.z_)&&Il(t)}async function Jm(n,e){const t=Y(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function jb(n,e){const t=Y(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Il(t)}function Vb(n,e,t){const r=Y(n),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(t);r.queries.delete(e)}function Il(n){n.Y_.forEach(e=>{e.next()})}var Cc,ih;(ih=Cc||(Cc={})).ea="default",ih.Cache="cache";class Xm{constructor(e,t,r){this.query=e,this.ta=t,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.na?this.ia(e)&&(this.ta.next(e),t=!0):this.sa(e,this.onlineState)&&(this.oa(e),t=!0),this.ra=e,t}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let t=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),t=!0),t}sa(e,t){if(!e.fromCache||!this.J_())return!0;const r=t!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const t=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}oa(e){e=Ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Cc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e){this.key=e}}class tp{constructor(e){this.key=e}}class Mb{constructor(e,t){this.query=e,this.Ta=t,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ee(),this.mutatedKeys=ee(),this.Aa=wm(e),this.Ra=new mr(this.Aa)}get Va(){return this.Ta}ma(e,t){const r=t?t.fa:new rh,s=t?t.Ra:this.Ra;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,g)=>{const w=s.get(m),E=$a(this.query,g)?g:null,k=!!w&&this.mutatedKeys.has(w.key),N=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let C=!1;w&&E?w.data.isEqual(E.data)?k!==N&&(r.track({type:3,doc:E}),C=!0):this.ga(w,E)||(r.track({type:2,doc:E}),C=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(c=!0)):!w&&E?(r.track({type:0,doc:E}),C=!0):w&&!E&&(r.track({type:1,doc:w}),C=!0,(l||h)&&(c=!0)),C&&(E?(o=o.add(E),i=N?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),r.track({type:1,doc:m})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((m,g)=>function(E,k){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return N(E)-N(k)}(m.type,g.type)||this.Aa(m.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=t&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new Ar(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new rh,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(t=>this.Ta=this.Ta.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ta=this.Ta.delete(t)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const t=[];return e.forEach(r=>{this.da.has(r)||t.push(new tp(r))}),this.da.forEach(r=>{e.has(r)||t.push(new ep(r))}),t}ba(e){this.Ta=e.Ts,this.da=ee();const t=this.ma(e.documents);return this.applyChanges(t,!0)}Da(){return Ar.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Lb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Fb{constructor(e){this.key=e,this.va=!1}}class Ub{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Dr(c=>vm(c),Ba),this.Ma=new Map,this.xa=new Set,this.Oa=new pe(W.comparator),this.Na=new Map,this.La=new pl,this.Ba={},this.ka=new Map,this.qa=xr.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Bb(n,e,t=!0){const r=op(n);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await np(r,e,t,!0),s}async function $b(n,e){const t=op(n);await np(t,e,!0,!1)}async function np(n,e,t,r){const s=await ub(n.localStore,Tt(e)),i=s.targetId,o=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await qb(n,e,i,o==="current",s.resumeToken)),n.isPrimaryClient&&t&&zm(n.remoteStore,s),c}async function qb(n,e,t,r,s){n.Ka=(g,w,E)=>async function(N,C,F,j){let $=C.view.ma(F);$.ns&&($=await Xd(N.localStore,C.query,!1).then(({documents:b})=>C.view.ma(b,$)));const J=j&&j.targetChanges.get(C.targetId),ve=j&&j.targetMismatches.get(C.targetId)!=null,le=C.view.applyChanges($,N.isPrimaryClient,J,ve);return oh(N,C.targetId,le.wa),le.snapshot}(n,g,w,E);const i=await Xd(n.localStore,e,!0),o=new Mb(e,i.Ts),c=o.ma(i.documents),l=ri.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=o.applyChanges(c,n.isPrimaryClient,l);oh(n,t,h.wa);const m=new Lb(e,t,o);return n.Fa.set(e,m),n.Ma.has(t)?n.Ma.get(t).push(e):n.Ma.set(t,[e]),h.snapshot}async function Wb(n,e,t){const r=Y(n),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ba(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&_l(r.remoteStore,s.targetId),Oc(r,s.targetId)}).catch(Xs)):(Oc(r,s.targetId),await Pc(r.localStore,s.targetId,!0))}async function zb(n,e){const t=Y(n),r=t.Fa.get(e),s=t.Ma.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),_l(t.remoteStore,r.targetId))}async function Hb(n,e,t){const r=Xb(n);try{const s=await function(o,c){const l=Y(o),h=be.now(),m=c.reduce((E,k)=>E.add(k.key),ee());let g,w;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=qt(),N=ee();return l.cs.getEntries(E,m).next(C=>{k=C,k.forEach((F,j)=>{j.isValidDocument()||(N=N.add(F))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,k)).next(C=>{g=C;const F=[];for(const j of c){const $=mT(j,g.get(j.key).overlayedDocument);$!=null&&F.push(new wn(j.key,$,dm($.value.mapValue),rt.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,F,c)}).next(C=>{w=C;const F=C.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(E,C.batchId,F)})}).then(()=>({batchId:w.batchId,changes:Tm(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new pe(ie)),h=h.insert(c,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,t),await ii(r,s.changes),await Ka(r.remoteStore)}catch(s){const i=bl(s,"Failed to persist write");t.reject(i)}}async function rp(n,e){const t=Y(n);try{const r=await ob(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Na.get(i);o&&(oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?oe(o.va):s.removedDocuments.size>0&&(oe(o.va),o.va=!1))}),await ii(t,r,e)}catch(r){await Xs(r)}}function ah(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=Y(o);l.onlineState=c;let h=!1;l.queries.forEach((m,g)=>{for(const w of g.j_)w.Z_(c)&&(h=!0)}),h&&Il(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Gb(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new pe(W.comparator);o=o.insert(i,Fe.newNoDocument(i,Z.min()));const c=ee().add(i),l=new za(Z.min(),new Map,new pe(ie),o,c);await rp(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),xl(r)}else await Pc(r.localStore,e,!1).then(()=>Oc(r,e,t)).catch(Xs)}async function Kb(n,e){const t=Y(n),r=e.batch.batchId;try{const s=await ab(t.localStore,e);ip(t,r,null),sp(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ii(t,s)}catch(s){await Xs(s)}}async function Zb(n,e,t){const r=Y(n);try{const s=await function(o,c){const l=Y(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let m;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(oe(g!==null),m=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,m)).next(()=>l.localDocuments.getDocuments(h,m))})}(r.localStore,e);ip(r,e,t),sp(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ii(r,s)}catch(s){await Xs(s)}}function sp(n,e){(n.ka.get(e)||[]).forEach(t=>{t.resolve()}),n.ka.delete(e)}function ip(n,e,t){const r=Y(n);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Oc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Ma.get(e))n.Fa.delete(r),t&&n.Ca.$a(r,t);n.Ma.delete(e),n.isPrimaryClient&&n.La.gr(e).forEach(r=>{n.La.containsKey(r)||ap(n,r)})}function ap(n,e){n.xa.delete(e.path.canonicalString());const t=n.Oa.get(e);t!==null&&(_l(n.remoteStore,t),n.Oa=n.Oa.remove(e),n.Na.delete(t),xl(n))}function oh(n,e,t){for(const r of t)r instanceof ep?(n.La.addReference(r.key,e),Yb(n,r)):r instanceof tp?(B("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,e),n.La.containsKey(r.key)||ap(n,r.key)):K()}function Yb(n,e){const t=e.key,r=t.path.canonicalString();n.Oa.get(t)||n.xa.has(r)||(B("SyncEngine","New document in limbo: "+t),n.xa.add(r),xl(n))}function xl(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const e=n.xa.values().next().value;n.xa.delete(e);const t=new W(he.fromString(e)),r=n.qa.next();n.Na.set(r,new Fb(t)),n.Oa=n.Oa.insert(t,r),zm(n.remoteStore,new rn(Tt(ll(t.path)),r,"TargetPurposeLimboResolution",rl.oe))}}async function ii(n,e,t){const r=Y(n),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,l)=>{o.push(r.Ka(l,e,t).then(h=>{var m;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=yl.Wi(l.targetId,h);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const m=Y(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,w=>O.forEach(w.$i,E=>m.persistence.referenceDelegate.addReference(g,w.targetId,E)).next(()=>O.forEach(w.Ui,E=>m.persistence.referenceDelegate.removeReference(g,w.targetId,E)))))}catch(g){if(!ei(g))throw g;B("LocalStore","Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const E=m.os.get(w),k=E.snapshotVersion,N=E.withLastLimboFreeSnapshotVersion(k);m.os=m.os.insert(w,N)}}}(r.localStore,i))}async function Qb(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Bm(t.localStore,e);t.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(l=>{l.reject(new U(P.CANCELLED,o))})}),i.ka.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ii(t,r.hs)}}function Jb(n,e){const t=Y(n),r=t.Na.get(e);if(r&&r.va)return ee().add(r.key);{let s=ee();const i=t.Ma.get(e);if(!i)return s;for(const o of i){const c=t.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function op(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=rp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Gb.bind(null,e),e.Ca.d_=jb.bind(null,e.eventManager),e.Ca.$a=Vb.bind(null,e.eventManager),e}function Xb(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Kb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Zb.bind(null,e),e}class ha{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ha(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,t){return null}Ha(e,t){return null}za(e){return ib(this.persistence,new rb,e.initialUser,this.serializer)}Ga(e){return new eb(gl.Zr,this.serializer)}Wa(e){return new hb}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ha.provider={build:()=>new ha};class Dc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ah(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qb.bind(null,this.syncEngine),await Cb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Db}()}createDatastore(e){const t=Ha(e.databaseInfo.databaseId),r=function(i){return new gb(i)}(e.databaseInfo);return function(i,o,c,l){return new vb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,o,c){return new Eb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>ah(this.syncEngine,t,0),function(){return th.D()?new th:new fb}())}createSyncEngine(e,t){return function(s,i,o,c,l,h,m){const g=new Ub(s,i,o,c,l,h);return m&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=Y(s);B("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await si(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dc.provider={build:()=>new Dc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):$t("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Le.UNAUTHENTICATED,this.clientId=cm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{B("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(B("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ft;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=bl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Zo(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ch(n,e){n.asyncQueue.verifyOperationInProgress();const t=await tI(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>nh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>nh(e.remoteStore,s)),n._onlineComponents=e}async function tI(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Zo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Er("Error using user provided cache. Falling back to memory cache: "+t),await Zo(n,new ha)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Zo(n,new ha);return n._offlineComponents}async function lp(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await ch(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await ch(n,new Dc))),n._onlineComponents}function nI(n){return lp(n).then(e=>e.syncEngine)}async function up(n){const e=await lp(n),t=e.eventManager;return t.onListen=Bb.bind(null,e.syncEngine),t.onUnlisten=Wb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=$b.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=zb.bind(null,e.syncEngine),t}function rI(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const m=new cp({next:w=>{m.Za(),o.enqueueAndForget(()=>Jm(i,g));const E=w.docs.has(c);!E&&w.fromCache?h.reject(new U(P.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&w.fromCache&&l&&l.source==="server"?h.reject(new U(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),g=new Xm(ll(c.path),m,{includeMetadataChanges:!0,_a:!0});return Qm(i,g)}(await up(n),n.asyncQueue,e,t,r)),r.promise}function sI(n,e,t={}){const r=new Ft;return n.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const m=new cp({next:w=>{m.Za(),o.enqueueAndForget(()=>Jm(i,g)),w.fromCache&&l.source==="server"?h.reject(new U(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),g=new Xm(c,m,{includeMetadataChanges:!0,_a:!0});return Qm(i,g)}(await up(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(n,e,t){if(!t)throw new U(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function iI(n,e,t,r){if(e===!0&&r===!0)throw new U(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function uh(n){if(!W.isDocumentKey(n))throw new U(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dh(n){if(W.isDocumentKey(n))throw new U(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Za(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new U(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Za(n);throw new U(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dp((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(P.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ya{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hh(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new bE;switch(r.type){case"firstParty":return new SE(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=lh.get(t);r&&(B("ComponentProvider","Removing Datastore"),lh.delete(t),r.terminate())}(this),Promise.resolve()}}function aI(n,e,t,r={}){var s;const i=(n=yt(n,Ya))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Er("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=Le.MOCK_USER;else{c=df(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new U(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Le(h)}n._authCredentials=new IE(new om(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class We{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new on(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}}class on extends Vr{constructor(e,t,r){super(e,t,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new W(e))}withConverter(e){return new on(this.firestore,e,this._path)}}function st(n,e,...t){if(n=_e(n),hp("collection","path",e),n instanceof Ya){const r=he.fromString(e,...t);return dh(r),new on(n,null,r)}{if(!(n instanceof We||n instanceof on))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return dh(r),new on(n.firestore,null,r)}}function nt(n,e,...t){if(n=_e(n),arguments.length===1&&(e=cm.newId()),hp("doc","path",e),n instanceof Ya){const r=he.fromString(e,...t);return uh(r),new We(n,null,new W(r))}{if(!(n instanceof We||n instanceof on))throw new U(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(he.fromString(e,...t));return uh(r),new We(n.firestore,n instanceof on?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qm(this,"async_queue_retry"),this.Vu=()=>{const r=Ko();r&&B("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const t=Ko();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const t=Ko();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const t=new Ft;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ei(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const t=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw $t("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=t,t}enqueueAfterDelay(e,t,r){this.fu(),this.Ru.indexOf(e)>-1&&(t=0);const s=Tl.createAndSchedule(this,e,t,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&K()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const t of this.Tu)if(t.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Tu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const t=this.Tu.indexOf(e);this.Tu.splice(t,1)}}class Jn extends Ya{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new fh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new fh(e),this._firestoreClient=void 0,await e}}}function oI(n,e){const t=typeof n=="object"?n:Va(),r=typeof n=="string"?n:"(default)",s=yn(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=cf("firestore");i&&aI(s,...i)}return s}function Al(n){if(n._terminated)throw new U(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cI(n),n._firestoreClient}function cI(n){var e,t,r;const s=n._freezeSettings(),i=function(c,l,h,m){return new UE(c,l,h,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,dp(m.experimentalLongPollingOptions),m.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new eI(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(Pe.fromBase64String(e))}catch(t){throw new U(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Sr(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Re(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ie(this._lat,e._lat)||ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=/^__.*__$/;class uI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new wn(e,this.data,this.fieldMask,t,this.fieldTransforms):new ni(e,this.data,t,this.fieldTransforms)}}class fp{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new wn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mp(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Nl{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Nl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return fa(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(mp(this.Cu)&&lI.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dI{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ha(e)}Qu(e,t,r,s=!1){return new Nl({Cu:e,methodName:t,qu:r,path:Re.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ja(n){const e=n._freezeSettings(),t=Ha(n._databaseId);return new dI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function pp(n,e,t,r,s,i={}){const o=n.Qu(i.merge||i.mergeFields?2:0,e,t,s);Pl("Data must be an object, but it was:",o,r);const c=gp(r,o);let l,h;if(i.merge)l=new Ye(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const g of i.mergeFields){const w=jc(e,g,t);if(!o.contains(w))throw new U(P.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);_p(m,w)||m.push(w)}l=new Ye(m),h=o.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=o.fieldTransforms;return new uI(new He(c),l,h)}class Xa extends Sl{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xa}}function hI(n,e,t,r){const s=n.Qu(1,e,t);Pl("Data must be an object, but it was:",s,r);const i=[],o=He.empty();Yn(r,(l,h)=>{const m=Cl(e,l,t);h=_e(h);const g=s.Nu(m);if(h instanceof Xa)i.push(m);else{const w=ai(h,g);w!=null&&(i.push(m),o.set(m,w))}});const c=new Ye(i);return new fp(o,c,s.fieldTransforms)}function fI(n,e,t,r,s,i){const o=n.Qu(1,e,t),c=[jc(e,r,t)],l=[s];if(i.length%2!=0)throw new U(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<i.length;w+=2)c.push(jc(e,i[w])),l.push(i[w+1]);const h=[],m=He.empty();for(let w=c.length-1;w>=0;--w)if(!_p(h,c[w])){const E=c[w];let k=l[w];k=_e(k);const N=o.Nu(E);if(k instanceof Xa)h.push(E);else{const C=ai(k,N);C!=null&&(h.push(E),m.set(E,C))}}const g=new Ye(h);return new fp(m,g,o.fieldTransforms)}function mI(n,e,t,r=!1){return ai(t,n.Qu(r?4:3,e))}function ai(n,e){if(yp(n=_e(n)))return Pl("Unsupported field value:",e,n),gp(n,e);if(n instanceof Sl)return function(r,s){if(!mp(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ai(c,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=_e(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=be.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof be){const i=new be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Rl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sr)return{bytesValue:Dm(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ml(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof kl)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.Bu("VectorValues must only contain numeric values.");return ul(c.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Za(r)}`)}(n,e)}function gp(n,e){const t={};return lm(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yn(n,(r,s)=>{const i=ai(s,e.Mu(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function yp(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof be||n instanceof Rl||n instanceof Sr||n instanceof We||n instanceof Sl||n instanceof kl)}function Pl(n,e,t){if(!yp(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const r=Za(t);throw r==="an object"?e.Bu(n+" a custom object"):e.Bu(n+" "+r)}}function jc(n,e,t){if((e=_e(e))instanceof Qa)return e._internalPath;if(typeof e=="string")return Cl(n,e);throw fa("Field path arguments must be of type string or ",n,!1,void 0,t)}const pI=new RegExp("[~\\*/\\[\\]]");function Cl(n,e,t){if(e.search(pI)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Qa(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fa(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(P.INVALID_ARGUMENT,c+n+l)}function _p(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ol("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class gI extends vp{data(){return super.data()}}function Ol(n,e){return typeof e=="string"?Cl(n,e):e instanceof Qa?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new U(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dl{}class _I extends Dl{}function Bn(n,e,...t){let r=[];e instanceof Dl&&r.push(e),r=r.concat(t),function(i){const o=i.filter(l=>l instanceof jl).length,c=i.filter(l=>l instanceof eo).length;if(o>1||o>0&&c>0)throw new U(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class eo extends _I{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new eo(e,t,r)}_apply(e){const t=this._parse(e);return wp(e._query,t),new Vr(e.firestore,e.converter,xc(e._query,t))}_parse(e){const t=Ja(e.firestore);return function(i,o,c,l,h,m,g){let w;if(h.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){ph(g,m);const E=[];for(const k of g)E.push(mh(l,i,k));w={arrayValue:{values:E}}}else w=mh(l,i,g)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||ph(g,m),w=mI(c,o,g,m==="in"||m==="not-in");return Ee.create(h,m,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ut(n,e,t){const r=e,s=Ol("where",n);return eo._create(s,r,t)}class jl extends Dl{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new jl(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:gt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)wp(o,l),o=xc(o,l)}(e._query,t),new Vr(e.firestore,e.converter,xc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mh(n,e,t){if(typeof(t=_e(t))=="string"){if(t==="")throw new U(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!_m(e)&&t.indexOf("/")!==-1)throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(he.fromString(t));if(!W.isDocumentKey(r))throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vd(n,new W(r))}if(t instanceof We)return Vd(n,t._key);throw new U(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Za(t)}.`)}function ph(n,e){if(!Array.isArray(n)||n.length===0)throw new U(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function wp(n,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class vI{convertValue(e,t="none"){switch(Un(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Fn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yn(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ye(o.doubleValue));return new kl(i)}convertGeoPoint(e){return new Rl(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=il(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ss(e));default:return null}}convertTimestamp(e){const t=ln(e);return new be(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=he.fromString(e);oe(Um(r));const s=new Rs(r.get(1),r.get(3)),i=new W(r.popFirst(5));return s.isEqual(t)||$t(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(n,e,t){let r;return r=n?n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tp extends vp{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Ol("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gi extends Tp{data(e={}){return super.data(e)}}class wI{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gi(this._firestore,this._userDataWriter,r.key,r,new ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Gi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ds(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Gi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ds(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,m=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:EI(c.type),doc:l,oldIndex:h,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function EI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(n){n=yt(n,We);const e=yt(n.firestore,Jn);return rI(Al(e),n._key).then(t=>II(e,n,t))}class bp extends vI{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,t)}}function dn(n){n=yt(n,Vr);const e=yt(n.firestore,Jn),t=Al(e),r=new bp(e);return yI(n._query),sI(t,n._query).then(s=>new wI(e,r,n,s))}function TI(n,e,t){n=yt(n,We);const r=yt(n.firestore,Jn),s=Ep(n.converter,e);return no(r,[pp(Ja(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,rt.none())])}function ma(n,e,t,...r){n=yt(n,We);const s=yt(n.firestore,Jn),i=Ja(s);let o;return o=typeof(e=_e(e))=="string"||e instanceof Qa?fI(i,"updateDoc",n._key,e,t,r):hI(i,"updateDoc",n._key,e),no(s,[o.toMutation(n._key,rt.exists(!0))])}function bI(n){return no(yt(n.firestore,Jn),[new dl(n._key,rt.none())])}function to(n,e){const t=yt(n.firestore,Jn),r=nt(n),s=Ep(n.converter,e);return no(t,[pp(Ja(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,rt.exists(!1))]).then(()=>r)}function no(n,e){return function(r,s){const i=new Ft;return r.asyncQueue.enqueueAndForget(async()=>Hb(await nI(r),s,i)),i.promise}(Al(n),e)}function II(n,e,t){const r=t.docs.get(e._key),s=new bp(n);return new Tp(n,s,e._key,r,new ds(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Or=s})(Kn),mt(new it("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Jn(new xE(r.getProvider("auth-internal")),new kE(r.getProvider("app-check-internal")),function(h,m){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new U(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Rs(h.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Ge(Pd,"4.7.3",e),Ge(Pd,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip="firebasestorage.googleapis.com",xI="storageBucket",AI=2*60*1e3,SI=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends at{constructor(e,t,r=0){super(Yo(e),`Firebase Storage: ${t} (${Yo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,kt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var At;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(At||(At={}));function Yo(n){return"storage/"+n}function RI(){const n="An unknown error occurred, please check the error payload for server response.";return new kt(At.UNKNOWN,n)}function kI(){return new kt(At.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NI(){return new kt(At.CANCELED,"User canceled the upload/download.")}function PI(n){return new kt(At.INVALID_URL,"Invalid URL '"+n+"'.")}function CI(n){return new kt(At.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function gh(n){return new kt(At.INVALID_ARGUMENT,n)}function xp(){return new kt(At.APP_DELETED,"The Firebase app was deleted.")}function OI(n){return new kt(At.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=dt.makeFromUrl(e,t)}catch{return new dt(e,"")}if(r.path==="")return r;throw CI(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(J){J.path.charAt(J.path.length-1)==="/"&&(J.path_=J.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(J){J.path_=decodeURIComponent(J.path)}const m="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${m}/b/${s}/o${w}`,"i"),k={bucket:1,path:3},N=t===Ip?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",F=new RegExp(`^https?://${N}/${s}/${C}`,"i"),$=[{regex:c,indices:l,postModify:i},{regex:E,indices:k,postModify:h},{regex:F,indices:{bucket:1,path:2},postModify:h}];for(let J=0;J<$.length;J++){const ve=$[J],le=ve.regex.exec(e);if(le){const b=le[ve.indices.bucket];let y=le[ve.indices.path];y||(y=""),r=new dt(b,y),ve.postModify(r);break}}if(r==null)throw PI(e);return r}}class DI{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(n,e,t){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function m(...C){h||(h=!0,e.apply(null,C))}function g(C){s=setTimeout(()=>{s=null,n(E,l())},C)}function w(){i&&clearTimeout(i)}function E(C,...F){if(h){w();return}if(C){w(),m.call(null,C,...F);return}if(l()||o){w(),m.call(null,C,...F);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,g($)}let k=!1;function N(C){k||(k=!0,w(),!h&&(s!==null?(C||(c=2),clearTimeout(s),g(0)):C||(c=1)))}return g(0),i=setTimeout(()=>{o=!0,N(!0)},t),N}function VI(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n){return n!==void 0}function yh(n,e,t,r){if(r<e)throw gh(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw gh(`Invalid value for '${n}'. Expected ${t} or less.`)}function LI(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var pa;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(pa||(pa={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e,t,r,s,i,o,c,l,h,m,g,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=m,this.connectionFactory_=g,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Di(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===pa.NO_ERROR,l=i.getStatus();if(!c||FI(l,this.additionalRetryCodes_)&&this.retry){const m=i.getErrorCode()===pa.ABORT;r(!1,new Di(!1,null,m));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new Di(h,i))})},t=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());MI(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=RI();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?xp():NI();o(l)}else{const l=kI();o(l)}};this.canceled_?t(!1,new Di(!1,null,!0)):this.backoffId_=jI(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VI(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Di{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function BI(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $I(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qI(n,e){e&&(n["X-Firebase-GMPID"]=e)}function WI(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function zI(n,e,t,r,s,i,o=!0){const c=LI(n.urlParams),l=n.url+c,h=Object.assign({},n.headers);return qI(h,e),BI(h,t),$I(h,i),WI(h,r),new UI(l,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function GI(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this._service=e,t instanceof dt?this._location=t:this._location=dt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ga(e,t)}get root(){const e=new dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return GI(this._location.path)}get storage(){return this._service}get parent(){const e=HI(this._location.path);if(e===null)return null;const t=new dt(this._location.bucket,e);return new ga(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw OI(e)}}function _h(n,e){const t=e==null?void 0:e[xI];return t==null?null:dt.makeFromBucketSpec(t,n)}function KI(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:df(s,n.app.options.projectId))}class ZI{constructor(e,t,r,s,i){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Ip,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=AI,this._maxUploadRetryTime=SI,this._requests=new Set,s!=null?this._bucket=dt.makeFromBucketSpec(s,this._host):this._bucket=_h(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=dt.makeFromBucketSpec(this._url,e):this._bucket=_h(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yh("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ga(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new DI(xp());{const o=zI(e,this._appId,r,s,t,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const vh="@firebase/storage",wh="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap="storage";function YI(n=Va(),e){n=_e(n);const r=yn(n,Ap).getImmediate({identifier:e}),s=cf("storage");return s&&QI(r,...s),r}function QI(n,e,t,r={}){KI(n,e,t,r)}function JI(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ZI(t,r,s,e,Kn)}function XI(){mt(new it(Ap,JI,"PUBLIC").setMultipleInstances(!0)),Ge(vh,wh,""),Ge(vh,wh,"esm2017")}XI();const Sp="@firebase/installations",Vl="0.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=1e4,kp=`w:${Vl}`,Np="FIS_v2",ex="https://firebaseinstallations.googleapis.com/v1",tx=60*60*1e3,nx="installations",rx="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sx={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new Gn(nx,rx,sx);function Pp(n){return n instanceof at&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp({projectId:n}){return`${ex}/projects/${n}/installations`}function Op(n){return{token:n.token,requestStatus:2,expiresIn:ax(n.expiresIn),creationTime:Date.now()}}async function Dp(n,e){const r=(await e.json()).error;return $n.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function jp({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function ix(n,{refreshToken:e}){const t=jp(n);return t.append("Authorization",ox(e)),t}async function Vp(n){const e=await n();return e.status>=500&&e.status<600?n():e}function ax(n){return Number(n.replace("s","000"))}function ox(n){return`${Np} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=Cp(n),s=jp(n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={fid:t,authVersion:Np,appId:n.appId,sdkVersion:kp},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vp(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||t,registrationStatus:2,refreshToken:h.refreshToken,authToken:Op(h.authToken)}}else throw await Dp("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lx(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=/^[cdef][\w-]{21}$/,Vc="";function dx(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=hx(n);return ux.test(t)?t:Vc}catch{return Vc}}function hx(n){return lx(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=new Map;function Fp(n,e){const t=ro(n);Up(t,e),fx(t,e)}function Up(n,e){const t=Lp.get(n);if(t)for(const r of t)r(e)}function fx(n,e){const t=mx();t&&t.postMessage({key:n,fid:e}),px()}let Nn=null;function mx(){return!Nn&&"BroadcastChannel"in self&&(Nn=new BroadcastChannel("[Firebase] FID Change"),Nn.onmessage=n=>{Up(n.data.key,n.data.fid)}),Nn}function px(){Lp.size===0&&Nn&&(Nn.close(),Nn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="firebase-installations-database",yx=1,qn="firebase-installations-store";let Qo=null;function Ml(){return Qo||(Qo=yf(gx,yx,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(qn)}}})),Qo}async function ya(n,e){const t=ro(n),s=(await Ml()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(t);return await i.put(e,t),await s.done,(!o||o.fid!==e.fid)&&Fp(n,e.fid),e}async function Bp(n){const e=ro(n),r=(await Ml()).transaction(qn,"readwrite");await r.objectStore(qn).delete(e),await r.done}async function so(n,e){const t=ro(n),s=(await Ml()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(t),c=e(o);return c===void 0?await i.delete(t):await i.put(c,t),await s.done,c&&(!o||o.fid!==c.fid)&&Fp(n,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(n){let e;const t=await so(n.appConfig,r=>{const s=_x(r),i=vx(n,s);return e=i.registrationPromise,i.installationEntry});return t.fid===Vc?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function _x(n){const e=n||{fid:dx(),registrationStatus:0};return $p(e)}function vx(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($n.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=wx(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Ex(n)}:{installationEntry:e}}async function wx(n,e){try{const t=await cx(n,e);return ya(n.appConfig,t)}catch(t){throw Pp(t)&&t.customData.serverCode===409?await Bp(n.appConfig):await ya(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Ex(n){let e=await Eh(n.appConfig);for(;e.registrationStatus===1;)await Mp(100),e=await Eh(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ll(n);return r||t}return e}function Eh(n){return so(n,e=>{if(!e)throw $n.create("installation-not-found");return $p(e)})}function $p(n){return Tx(n)?{fid:n.fid,registrationStatus:0}:n}function Tx(n){return n.registrationStatus===1&&n.registrationTime+Rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx({appConfig:n,heartbeatServiceProvider:e},t){const r=Ix(n,t),s=ix(n,t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const o={installation:{sdkVersion:kp,appId:n.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},l=await Vp(()=>fetch(r,c));if(l.ok){const h=await l.json();return Op(h)}else throw await Dp("Generate Auth Token",l)}function Ix(n,{fid:e}){return`${Cp(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(n,e=!1){let t;const r=await so(n.appConfig,i=>{if(!qp(i))throw $n.create("not-registered");const o=i.authToken;if(!e&&Sx(o))return i;if(o.requestStatus===1)return t=xx(n,e),i;{if(!navigator.onLine)throw $n.create("app-offline");const c=kx(i);return t=Ax(n,c),c}});return t?await t:r.authToken}async function xx(n,e){let t=await Th(n.appConfig);for(;t.authToken.requestStatus===1;)await Mp(100),t=await Th(n.appConfig);const r=t.authToken;return r.requestStatus===0?Fl(n,e):r}function Th(n){return so(n,e=>{if(!qp(e))throw $n.create("not-registered");const t=e.authToken;return Nx(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Ax(n,e){try{const t=await bx(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await ya(n.appConfig,r),t}catch(t){if(Pp(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await Bp(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await ya(n.appConfig,r)}throw t}}function qp(n){return n!==void 0&&n.registrationStatus===2}function Sx(n){return n.requestStatus===2&&!Rx(n)}function Rx(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+tx}function kx(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Nx(n){return n.requestStatus===1&&n.requestTime+Rp<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ll(e);return r?r.catch(console.error):Fl(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cx(n,e=!1){const t=n;return await Ox(t),(await Fl(t,e)).token}async function Ox(n){const{registrationPromise:e}=await Ll(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dx(n){if(!n||!n.options)throw Jo("App Configuration");if(!n.name)throw Jo("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Jo(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Jo(n){return $n.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp="installations",jx="installations-internal",Vx=n=>{const e=n.getProvider("app").getImmediate(),t=Dx(e),r=yn(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Mx=n=>{const e=n.getProvider("app").getImmediate(),t=yn(e,Wp).getImmediate();return{getId:()=>Px(t),getToken:s=>Cx(t,s)}};function Lx(){mt(new it(Wp,Vx,"PUBLIC")),mt(new it(jx,Mx,"PRIVATE"))}Lx();Ge(Sp,Vl);Ge(Sp,Vl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="analytics",Fx="firebase_id",Ux="origin",Bx=60*1e3,$x="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ul="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke=new ja("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Qe=new Gn("analytics","Analytics",qx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(n){if(!n.startsWith(Ul)){const e=Qe.create("invalid-gtag-resource",{gtagURL:n});return Ke.warn(e.message),""}return n}function zp(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function zx(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Hx(n,e){const t=zx("firebase-js-sdk-policy",{createScriptURL:Wx}),r=document.createElement("script"),s=`${Ul}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Gx(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function Kx(n,e,t,r,s,i){const o=r[s];try{if(o)await e[o];else{const l=(await zp(t)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){Ke.error(c)}n("config",s,i)}async function Zx(n,e,t,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const c=await zp(t);for(const l of o){const h=c.find(g=>g.measurementId===l),m=h&&e[h.appId];if(m)i.push(m);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),n("event",r,s||{})}catch(i){Ke.error(i)}}function Yx(n,e,t,r){async function s(i,...o){try{if(i==="event"){const[c,l]=o;await Zx(n,e,t,c,l)}else if(i==="config"){const[c,l]=o;await Kx(n,e,t,r,c,l)}else if(i==="consent"){const[c,l]=o;n("consent",c,l)}else if(i==="get"){const[c,l,h]=o;n("get",c,l,h)}else if(i==="set"){const[c]=o;n("set",c)}else n(i,...o)}catch(c){Ke.error(c)}}return s}function Qx(n,e,t,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=Yx(i,n,e,t),{gtagCore:i,wrappedGtag:window[s]}}function Jx(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Ul)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=30,eA=1e3;class tA{constructor(e={},t=eA){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Hp=new tA;function nA(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function rA(n){var e;const{appId:t,apiKey:r}=n,s={method:"GET",headers:nA(r)},i=$x.replace("{app-id}",t),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let c="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw Qe.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function sA(n,e=Hp,t){const{appId:r,apiKey:s,measurementId:i}=n.options;if(!r)throw Qe.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Qe.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new oA;return setTimeout(async()=>{c.abort()},Bx),Gp({appId:r,apiKey:s,measurementId:i},o,c,e)}async function Gp(n,{throttleEndTimeMillis:e,backoffCount:t},r,s=Hp){var i;const{appId:o,measurementId:c}=n;try{await iA(r,e)}catch(l){if(c)return Ke.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:c};throw l}try{const l=await rA(n);return s.deleteThrottleMetadata(o),l}catch(l){const h=l;if(!aA(h)){if(s.deleteThrottleMetadata(o),c)return Ke.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:c};throw l}const m=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?nd(t,s.intervalMillis,Xx):nd(t,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+m,backoffCount:t+1};return s.setThrottleMetadata(o,g),Ke.debug(`Calling attemptFetch again in ${m} millis`),Gp(n,g,r,s)}}function iA(n,e){return new Promise((t,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(i),r(Qe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function aA(n){if(!(n instanceof at)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class oA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function cA(n,e,t,r,s){if(s&&s.global){n("event",t,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});n("event",t,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(){if(ff())try{await mf()}catch(n){return Ke.warn(Qe.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Ke.warn(Qe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uA(n,e,t,r,s,i,o){var c;const l=sA(n);l.then(E=>{t[E.measurementId]=E.appId,n.options.measurementId&&E.measurementId!==n.options.measurementId&&Ke.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${E.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(E=>Ke.error(E)),e.push(l);const h=lA().then(E=>{if(E)return r.getId()}),[m,g]=await Promise.all([l,h]);Jx(i)||Hx(i,m.measurementId),s("js",new Date);const w=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return w[Ux]="firebase",w.update=!0,g!=null&&(w[Fx]=g),s("config",m.measurementId,w),m.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.app=e}_delete(){return delete vs[this.app.options.appId],Promise.resolve()}}let vs={},bh=[];const Ih={};let Xo="dataLayer",hA="gtag",xh,Kp,Ah=!1;function fA(){const n=[];if(hf()&&n.push("This is a browser extension environment."),W_()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),t=Qe.create("invalid-analytics-context",{errorInfo:e});Ke.warn(t.message)}}function mA(n,e,t){fA();const r=n.options.appId;if(!r)throw Qe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ke.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Qe.create("no-api-key");if(vs[r]!=null)throw Qe.create("already-exists",{id:r});if(!Ah){Gx(Xo);const{wrappedGtag:i,gtagCore:o}=Qx(vs,bh,Ih,Xo,hA);Kp=i,xh=o,Ah=!0}return vs[r]=uA(n,bh,Ih,e,xh,Xo,t),new dA(n)}function pA(n=Va()){n=_e(n);const e=yn(n,_a);return e.isInitialized()?e.getImmediate():gA(n)}function gA(n,e={}){const t=yn(n,_a);if(t.isInitialized()){const s=t.getImmediate();if(Ts(e,t.getOptions()))return s;throw Qe.create("already-initialized")}return t.initialize({options:e})}function yA(n,e,t,r){n=_e(n),cA(Kp,vs[n.app.options.appId],e,t,r).catch(s=>Ke.error(s))}const Sh="@firebase/analytics",Rh="0.10.8";function _A(){mt(new it(_a,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return mA(r,s,t)},"PUBLIC")),mt(new it("analytics-internal",n,"PRIVATE")),Ge(Sh,Rh),Ge(Sh,Rh,"esm2017");function n(e){try{const t=e.getProvider(_a).getImmediate();return{logEvent:(r,s,i)=>yA(t,r,s,i)}}catch(t){throw Qe.create("interop-component-reg-failed",{reason:t})}}}_A();const vA={apiKey:"AIzaSyAvpIHX0ECFRJu6b4laqE2cfTMIeh4tvyk",authDomain:"servicepro-fa8d0.firebaseapp.com",projectId:"servicepro-fa8d0",storageBucket:"servicepro-fa8d0.firebasestorage.app",messagingSenderId:"748697828445",appId:"1:748697828445:web:abdd9550342b57026061b4",measurementId:"G-HZ8FL0DTZW"},io=_f(vA),ts=vE(io),me=oI(io);YI(io);pA(io);const Pn={login:async(n,e)=>(await sw(ts,n,e)).user,register:async(n,e)=>(await rw(ts,n,e)).user,logout:()=>cw(ts),onAuthStateChanged:n=>ow(ts,n),getCurrentUser:()=>ts.currentUser,mapFirebaseUser:n=>({id:n.uid,email:n.email||"",name:n.displayName||"",phone:n.phoneNumber||"",avatar:n.photoURL||""})},pr={create:async(n,e)=>({id:(await to(st(me,n),e)).id,...e}),createWithFbUID:async(n,e)=>{debugger;const t=nt(me,n,e.id);debugger;const r=await TI(t,e);debugger;return{user:r}},get:async(n,e)=>{const t=nt(me,n,e),r=await Rr(t);return r.exists()?{id:r.id,...r.data()}:null},update:async(n,e,t)=>{const r=nt(me,n,e);await ma(r,t)},delete:async(n,e)=>{const t=nt(me,n,e);await bI(t)},query:async(n,e,t,r)=>{const s=Bn(st(me,n),ut(e,t,r));return(await dn(s)).docs.map(o=>({id:o.id,...o.data()}))},getAll:async n=>(await dn(st(me,n))).docs.map(t=>({id:t.id,...t.data()}))};class wA{constructor(){this.PARTNERS_COLLECTION="partners"}async createProfile(e,t){try{if(await this.getProfileByUserId(e))throw new Error("Partner profile already exists");const s={userId:e,...t,rating:0,reviewCount:0,isVerified:!1,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return{id:(await to(st(me,this.PARTNERS_COLLECTION),s)).id,...s}}catch(r){throw console.error("Error creating partner profile:",r),r}}async getProfileByUserId(e){try{const t=Bn(st(me,this.PARTNERS_COLLECTION),ut("userId","==",e)),r=await dn(t);if(r.empty)return null;const s=r.docs[0];return{id:s.id,...s.data()}}catch(t){throw console.error("Error fetching partner profile:",t),t}}async getProfileById(e){try{const t=nt(me,this.PARTNERS_COLLECTION,e),r=await Rr(t);return r.exists()?{id:r.id,...r.data()}:null}catch(t){throw console.error("Error fetching partner profile:",t),t}}}const Cs=new wA,EA=(n,e)=>({user:null,isAuthenticated:!1,isLoading:!1,error:null,login:async(t,r)=>{n({isLoading:!0,error:null});try{const s=await Pn.login(t,r),i=await pr.get("users",s.uid);debugger;if(!i)throw new Error("User data not found");const o=await Cs.getProfileByUserId(i.id);n({user:i,isAuthenticated:!0,partnerProfile:o})}catch(s){const i=s instanceof Error?s.message:"Login failed";throw n({error:i}),s}finally{n({isLoading:!1})}},logout:async()=>{n({isLoading:!0,error:null});try{await Pn.logout(),n({user:null,isAuthenticated:!1,partnerProfile:null})}catch(t){const r=t instanceof Error?t.message:"Logout failed";throw n({error:r}),t}finally{n({isLoading:!1})}},register:async t=>{n({isLoading:!0,error:null});try{const s={id:(await Pn.register(t.email,t.password)).uid,email:t.email,name:t.name,phone:t.phone};debugger;await pr.createWithFbUID("users",s);debugger;n({user:s,isAuthenticated:!0})}catch(r){const s=r instanceof Error?r.message:"Registration failed";throw n({error:s}),r}finally{n({isLoading:!1})}},updateProfile:async t=>{n({isLoading:!0,error:null});try{const{user:r}=e();if(!r)throw new Error("User not authenticated");await pr.update("users",r.id,{...t,updatedAt:new Date().toISOString()}),n(s=>({user:s.user?{...s.user,...t}:null}))}catch(r){const s=r instanceof Error?r.message:"Failed to update profile";throw n({error:s}),r}finally{n({isLoading:!1})}}}),or="bookings",ce={PENDING:"pending",CONFIRMED:"confirmed",COMPLETED:"completed",CANCELLED:"cancelled",REJECTED:"rejected"},kh=["09:00","09:30","10:00","10:30","11:00","11:30","13:00","13:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30"],ji={MIN_HOURS_IN_ADVANCE:2,MAX_DAYS_IN_ADVANCE:30,SLOT_DURATION:30,CANCELLATION_HOURS:24};function Ce(n){const e=Object.prototype.toString.call(n);return n instanceof Date||typeof n=="object"&&e==="[object Date]"?new n.constructor(+n):typeof n=="number"||e==="[object Number]"||typeof n=="string"||e==="[object String]"?new Date(n):new Date(NaN)}function Wt(n,e){return n instanceof Date?new n.constructor(e):new Date(e)}function Ki(n,e){const t=Ce(n);return isNaN(e)?Wt(n,NaN):(e&&t.setDate(t.getDate()+e),t)}function TA(n,e){const t=+Ce(n);return Wt(n,t+e)}const Zp=6048e5,bA=864e5,Yp=6e4,Bl=36e5;function IA(n,e){return TA(n,e*Bl)}let xA={};function ao(){return xA}function Os(n,e){var c,l,h,m;const t=ao(),r=(e==null?void 0:e.weekStartsOn)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.weekStartsOn)??t.weekStartsOn??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.weekStartsOn)??0,s=Ce(n),i=s.getDay(),o=(i<r?7:0)+i-r;return s.setDate(s.getDate()-o),s.setHours(0,0,0,0),s}function va(n){return Os(n,{weekStartsOn:1})}function Qp(n){const e=Ce(n),t=e.getFullYear(),r=Wt(n,0);r.setFullYear(t+1,0,4),r.setHours(0,0,0,0);const s=va(r),i=Wt(n,0);i.setFullYear(t,0,4),i.setHours(0,0,0,0);const o=va(i);return e.getTime()>=s.getTime()?t+1:e.getTime()>=o.getTime()?t:t-1}function Nh(n){const e=Ce(n);return e.setHours(0,0,0,0),e}function Ph(n){const e=Ce(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function AA(n,e){const t=Nh(n),r=Nh(e),s=+t-Ph(t),i=+r-Ph(r);return Math.round((s-i)/bA)}function SA(n){const e=Qp(n),t=Wt(n,0);return t.setFullYear(e,0,4),t.setHours(0,0,0,0),va(t)}function RA(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function kA(n){if(!RA(n)&&typeof n!="number")return!1;const e=Ce(n);return!isNaN(Number(e))}function NA(n){const e=Ce(n),t=Wt(n,0);return t.setFullYear(e.getFullYear(),0,1),t.setHours(0,0,0,0),t}const PA={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},CA=(n,e,t)=>{let r;const s=PA[n];return typeof s=="string"?r=s:e===1?r=s.one:r=s.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function ec(n){return(e={})=>{const t=e.width?String(e.width):n.defaultWidth;return n.formats[t]||n.formats[n.defaultWidth]}}const OA={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},DA={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},jA={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},VA={date:ec({formats:OA,defaultWidth:"full"}),time:ec({formats:DA,defaultWidth:"full"}),dateTime:ec({formats:jA,defaultWidth:"full"})},MA={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},LA=(n,e,t,r)=>MA[n];function ns(n){return(e,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let s;if(r==="formatting"&&n.formattingValues){const o=n.defaultFormattingWidth||n.defaultWidth,c=t!=null&&t.width?String(t.width):o;s=n.formattingValues[c]||n.formattingValues[o]}else{const o=n.defaultWidth,c=t!=null&&t.width?String(t.width):n.defaultWidth;s=n.values[c]||n.values[o]}const i=n.argumentCallback?n.argumentCallback(e):e;return s[i]}}const FA={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},UA={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},BA={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},$A={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},qA={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},WA={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},zA=(n,e)=>{const t=Number(n),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},HA={ordinalNumber:zA,era:ns({values:FA,defaultWidth:"wide"}),quarter:ns({values:UA,defaultWidth:"wide",argumentCallback:n=>n-1}),month:ns({values:BA,defaultWidth:"wide"}),day:ns({values:$A,defaultWidth:"wide"}),dayPeriod:ns({values:qA,defaultWidth:"wide",formattingValues:WA,defaultFormattingWidth:"wide"})};function rs(n){return(e,t={})=>{const r=t.width,s=r&&n.matchPatterns[r]||n.matchPatterns[n.defaultMatchWidth],i=e.match(s);if(!i)return null;const o=i[0],c=r&&n.parsePatterns[r]||n.parsePatterns[n.defaultParseWidth],l=Array.isArray(c)?KA(c,g=>g.test(o)):GA(c,g=>g.test(o));let h;h=n.valueCallback?n.valueCallback(l):l,h=t.valueCallback?t.valueCallback(h):h;const m=e.slice(o.length);return{value:h,rest:m}}}function GA(n,e){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)&&e(n[t]))return t}function KA(n,e){for(let t=0;t<n.length;t++)if(e(n[t]))return t}function ZA(n){return(e,t={})=>{const r=e.match(n.matchPattern);if(!r)return null;const s=r[0],i=e.match(n.parsePattern);if(!i)return null;let o=n.valueCallback?n.valueCallback(i[0]):i[0];o=t.valueCallback?t.valueCallback(o):o;const c=e.slice(s.length);return{value:o,rest:c}}}const YA=/^(\d+)(th|st|nd|rd)?/i,QA=/\d+/i,JA={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},XA={any:[/^b/i,/^(a|c)/i]},e1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},t1={any:[/1/i,/2/i,/3/i,/4/i]},n1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},r1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},s1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},i1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},a1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},o1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},c1={ordinalNumber:ZA({matchPattern:YA,parsePattern:QA,valueCallback:n=>parseInt(n,10)}),era:rs({matchPatterns:JA,defaultMatchWidth:"wide",parsePatterns:XA,defaultParseWidth:"any"}),quarter:rs({matchPatterns:e1,defaultMatchWidth:"wide",parsePatterns:t1,defaultParseWidth:"any",valueCallback:n=>n+1}),month:rs({matchPatterns:n1,defaultMatchWidth:"wide",parsePatterns:r1,defaultParseWidth:"any"}),day:rs({matchPatterns:s1,defaultMatchWidth:"wide",parsePatterns:i1,defaultParseWidth:"any"}),dayPeriod:rs({matchPatterns:a1,defaultMatchWidth:"any",parsePatterns:o1,defaultParseWidth:"any"})},l1={code:"en-US",formatDistance:CA,formatLong:VA,formatRelative:LA,localize:HA,match:c1,options:{weekStartsOn:0,firstWeekContainsDate:1}};function u1(n){const e=Ce(n);return AA(e,NA(e))+1}function d1(n){const e=Ce(n),t=+va(e)-+SA(e);return Math.round(t/Zp)+1}function Jp(n,e){var m,g,w,E;const t=Ce(n),r=t.getFullYear(),s=ao(),i=(e==null?void 0:e.firstWeekContainsDate)??((g=(m=e==null?void 0:e.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??s.firstWeekContainsDate??((E=(w=s.locale)==null?void 0:w.options)==null?void 0:E.firstWeekContainsDate)??1,o=Wt(n,0);o.setFullYear(r+1,0,i),o.setHours(0,0,0,0);const c=Os(o,e),l=Wt(n,0);l.setFullYear(r,0,i),l.setHours(0,0,0,0);const h=Os(l,e);return t.getTime()>=c.getTime()?r+1:t.getTime()>=h.getTime()?r:r-1}function h1(n,e){var c,l,h,m;const t=ao(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(c=e==null?void 0:e.locale)==null?void 0:c.options)==null?void 0:l.firstWeekContainsDate)??t.firstWeekContainsDate??((m=(h=t.locale)==null?void 0:h.options)==null?void 0:m.firstWeekContainsDate)??1,s=Jp(n,e),i=Wt(n,0);return i.setFullYear(s,0,r),i.setHours(0,0,0,0),Os(i,e)}function f1(n,e){const t=Ce(n),r=+Os(t,e)-+h1(t,e);return Math.round(r/Zp)+1}function ae(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}const Qt={y(n,e){const t=n.getFullYear(),r=t>0?t:1-t;return ae(e==="yy"?r%100:r,e.length)},M(n,e){const t=n.getMonth();return e==="M"?String(t+1):ae(t+1,2)},d(n,e){return ae(n.getDate(),e.length)},a(n,e){const t=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(n,e){return ae(n.getHours()%12||12,e.length)},H(n,e){return ae(n.getHours(),e.length)},m(n,e){return ae(n.getMinutes(),e.length)},s(n,e){return ae(n.getSeconds(),e.length)},S(n,e){const t=e.length,r=n.getMilliseconds(),s=Math.trunc(r*Math.pow(10,t-3));return ae(s,e.length)}},rr={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},Ch={G:function(n,e,t){const r=n.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(r,{width:"abbreviated"});case"GGGGG":return t.era(r,{width:"narrow"});case"GGGG":default:return t.era(r,{width:"wide"})}},y:function(n,e,t){if(e==="yo"){const r=n.getFullYear(),s=r>0?r:1-r;return t.ordinalNumber(s,{unit:"year"})}return Qt.y(n,e)},Y:function(n,e,t,r){const s=Jp(n,r),i=s>0?s:1-s;if(e==="YY"){const o=i%100;return ae(o,2)}return e==="Yo"?t.ordinalNumber(i,{unit:"year"}):ae(i,e.length)},R:function(n,e){const t=Qp(n);return ae(t,e.length)},u:function(n,e){const t=n.getFullYear();return ae(t,e.length)},Q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return ae(r,2);case"Qo":return t.ordinalNumber(r,{unit:"quarter"});case"QQQ":return t.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(r,{width:"wide",context:"formatting"})}},q:function(n,e,t){const r=Math.ceil((n.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return ae(r,2);case"qo":return t.ordinalNumber(r,{unit:"quarter"});case"qqq":return t.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(r,{width:"wide",context:"standalone"})}},M:function(n,e,t){const r=n.getMonth();switch(e){case"M":case"MM":return Qt.M(n,e);case"Mo":return t.ordinalNumber(r+1,{unit:"month"});case"MMM":return t.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(r,{width:"wide",context:"formatting"})}},L:function(n,e,t){const r=n.getMonth();switch(e){case"L":return String(r+1);case"LL":return ae(r+1,2);case"Lo":return t.ordinalNumber(r+1,{unit:"month"});case"LLL":return t.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(r,{width:"wide",context:"standalone"})}},w:function(n,e,t,r){const s=f1(n,r);return e==="wo"?t.ordinalNumber(s,{unit:"week"}):ae(s,e.length)},I:function(n,e,t){const r=d1(n);return e==="Io"?t.ordinalNumber(r,{unit:"week"}):ae(r,e.length)},d:function(n,e,t){return e==="do"?t.ordinalNumber(n.getDate(),{unit:"date"}):Qt.d(n,e)},D:function(n,e,t){const r=u1(n);return e==="Do"?t.ordinalNumber(r,{unit:"dayOfYear"}):ae(r,e.length)},E:function(n,e,t){const r=n.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(r,{width:"short",context:"formatting"});case"EEEE":default:return t.day(r,{width:"wide",context:"formatting"})}},e:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return ae(i,2);case"eo":return t.ordinalNumber(i,{unit:"day"});case"eee":return t.day(s,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(s,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(s,{width:"short",context:"formatting"});case"eeee":default:return t.day(s,{width:"wide",context:"formatting"})}},c:function(n,e,t,r){const s=n.getDay(),i=(s-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return ae(i,e.length);case"co":return t.ordinalNumber(i,{unit:"day"});case"ccc":return t.day(s,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(s,{width:"narrow",context:"standalone"});case"cccccc":return t.day(s,{width:"short",context:"standalone"});case"cccc":default:return t.day(s,{width:"wide",context:"standalone"})}},i:function(n,e,t){const r=n.getDay(),s=r===0?7:r;switch(e){case"i":return String(s);case"ii":return ae(s,e.length);case"io":return t.ordinalNumber(s,{unit:"day"});case"iii":return t.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(r,{width:"short",context:"formatting"});case"iiii":default:return t.day(r,{width:"wide",context:"formatting"})}},a:function(n,e,t){const s=n.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},b:function(n,e,t){const r=n.getHours();let s;switch(r===12?s=rr.noon:r===0?s=rr.midnight:s=r/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},B:function(n,e,t){const r=n.getHours();let s;switch(r>=17?s=rr.evening:r>=12?s=rr.afternoon:r>=4?s=rr.morning:s=rr.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(s,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(s,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(s,{width:"wide",context:"formatting"})}},h:function(n,e,t){if(e==="ho"){let r=n.getHours()%12;return r===0&&(r=12),t.ordinalNumber(r,{unit:"hour"})}return Qt.h(n,e)},H:function(n,e,t){return e==="Ho"?t.ordinalNumber(n.getHours(),{unit:"hour"}):Qt.H(n,e)},K:function(n,e,t){const r=n.getHours()%12;return e==="Ko"?t.ordinalNumber(r,{unit:"hour"}):ae(r,e.length)},k:function(n,e,t){let r=n.getHours();return r===0&&(r=24),e==="ko"?t.ordinalNumber(r,{unit:"hour"}):ae(r,e.length)},m:function(n,e,t){return e==="mo"?t.ordinalNumber(n.getMinutes(),{unit:"minute"}):Qt.m(n,e)},s:function(n,e,t){return e==="so"?t.ordinalNumber(n.getSeconds(),{unit:"second"}):Qt.s(n,e)},S:function(n,e){return Qt.S(n,e)},X:function(n,e,t){const r=n.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return Dh(r);case"XXXX":case"XX":return Rn(r);case"XXXXX":case"XXX":default:return Rn(r,":")}},x:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"x":return Dh(r);case"xxxx":case"xx":return Rn(r);case"xxxxx":case"xxx":default:return Rn(r,":")}},O:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Oh(r,":");case"OOOO":default:return"GMT"+Rn(r,":")}},z:function(n,e,t){const r=n.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Oh(r,":");case"zzzz":default:return"GMT"+Rn(r,":")}},t:function(n,e,t){const r=Math.trunc(n.getTime()/1e3);return ae(r,e.length)},T:function(n,e,t){const r=n.getTime();return ae(r,e.length)}};function Oh(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=Math.trunc(r/60),i=r%60;return i===0?t+String(s):t+String(s)+e+ae(i,2)}function Dh(n,e){return n%60===0?(n>0?"-":"+")+ae(Math.abs(n)/60,2):Rn(n,e)}function Rn(n,e=""){const t=n>0?"-":"+",r=Math.abs(n),s=ae(Math.trunc(r/60),2),i=ae(r%60,2);return t+s+e+i}const jh=(n,e)=>{switch(n){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Xp=(n,e)=>{switch(n){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},m1=(n,e)=>{const t=n.match(/(P+)(p+)?/)||[],r=t[1],s=t[2];if(!s)return jh(n,e);let i;switch(r){case"P":i=e.dateTime({width:"short"});break;case"PP":i=e.dateTime({width:"medium"});break;case"PPP":i=e.dateTime({width:"long"});break;case"PPPP":default:i=e.dateTime({width:"full"});break}return i.replace("{{date}}",jh(r,e)).replace("{{time}}",Xp(s,e))},p1={p:Xp,P:m1},g1=/^D+$/,y1=/^Y+$/,_1=["D","DD","YY","YYYY"];function v1(n){return g1.test(n)}function w1(n){return y1.test(n)}function E1(n,e,t){const r=T1(n,e,t);if(console.warn(r),_1.includes(n))throw new RangeError(r)}function T1(n,e,t){const r=n[0]==="Y"?"years":"days of the month";return`Use \`${n.toLowerCase()}\` instead of \`${n}\` (in \`${e}\`) for formatting ${r} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const b1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,I1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,x1=/^'([^]*?)'?$/,A1=/''/g,S1=/[a-zA-Z]/;function gr(n,e,t){var m,g,w,E;const r=ao(),s=r.locale??l1,i=r.firstWeekContainsDate??((g=(m=r.locale)==null?void 0:m.options)==null?void 0:g.firstWeekContainsDate)??1,o=r.weekStartsOn??((E=(w=r.locale)==null?void 0:w.options)==null?void 0:E.weekStartsOn)??0,c=Ce(n);if(!kA(c))throw new RangeError("Invalid time value");let l=e.match(I1).map(k=>{const N=k[0];if(N==="p"||N==="P"){const C=p1[N];return C(k,s.formatLong)}return k}).join("").match(b1).map(k=>{if(k==="''")return{isToken:!1,value:"'"};const N=k[0];if(N==="'")return{isToken:!1,value:R1(k)};if(Ch[N])return{isToken:!0,value:k};if(N.match(S1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+N+"`");return{isToken:!1,value:k}});s.localize.preprocessor&&(l=s.localize.preprocessor(c,l));const h={firstWeekContainsDate:i,weekStartsOn:o,locale:s};return l.map(k=>{if(!k.isToken)return k.value;const N=k.value;(w1(N)||v1(N))&&E1(N,e,String(n));const C=Ch[N[0]];return C(c,N,s.localize,h)}).join("")}function R1(n){const e=n.match(x1);return e?e[1].replace(A1,"'"):n}function k1(n,e){const t=Ce(n),r=Ce(e);return t.getTime()>r.getTime()}function N1(n,e){const t=Ce(n),r=Ce(e);return+t<+r}function Ds(n,e){const r=D1(n);let s;if(r.date){const l=j1(r.date,2);s=V1(l.restDateString,l.year)}if(!s||isNaN(s.getTime()))return new Date(NaN);const i=s.getTime();let o=0,c;if(r.time&&(o=M1(r.time),isNaN(o)))return new Date(NaN);if(r.timezone){if(c=L1(r.timezone),isNaN(c))return new Date(NaN)}else{const l=new Date(i+o),h=new Date(0);return h.setFullYear(l.getUTCFullYear(),l.getUTCMonth(),l.getUTCDate()),h.setHours(l.getUTCHours(),l.getUTCMinutes(),l.getUTCSeconds(),l.getUTCMilliseconds()),h}return new Date(i+o+c)}const Vi={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},P1=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,C1=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,O1=/^([+-])(\d{2})(?::?(\d{2}))?$/;function D1(n){const e={},t=n.split(Vi.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],Vi.timeZoneDelimiter.test(e.date)&&(e.date=n.split(Vi.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const s=Vi.timezone.exec(r);s?(e.time=r.replace(s[1],""),e.timezone=s[1]):e.time=r}return e}function j1(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const s=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:i===null?s:i*100,restDateString:n.slice((r[1]||r[2]).length)}}function V1(n,e){if(e===null)return new Date(NaN);const t=n.match(P1);if(!t)return new Date(NaN);const r=!!t[4],s=ss(t[1]),i=ss(t[2])-1,o=ss(t[3]),c=ss(t[4]),l=ss(t[5])-1;if(r)return q1(e,c,l)?F1(e,c,l):new Date(NaN);{const h=new Date(0);return!B1(e,i,o)||!$1(e,s)?new Date(NaN):(h.setUTCFullYear(e,i,Math.max(s,o)),h)}}function ss(n){return n?parseInt(n):1}function M1(n){const e=n.match(C1);if(!e)return NaN;const t=tc(e[1]),r=tc(e[2]),s=tc(e[3]);return W1(t,r,s)?t*Bl+r*Yp+s*1e3:NaN}function tc(n){return n&&parseFloat(n.replace(",","."))||0}function L1(n){if(n==="Z")return 0;const e=n.match(O1);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),s=e[3]&&parseInt(e[3])||0;return z1(r,s)?t*(r*Bl+s*Yp):NaN}function F1(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const s=r.getUTCDay()||7,i=(e-1)*7+t+1-s;return r.setUTCDate(r.getUTCDate()+i),r}const U1=[31,null,31,30,31,30,31,31,30,31,30,31];function eg(n){return n%400===0||n%4===0&&n%100!==0}function B1(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(U1[e]||(eg(n)?29:28))}function $1(n,e){return e>=1&&e<=(eg(n)?366:365)}function q1(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function W1(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function z1(n,e){return e>=0&&e<=59}async function H1(n,e){const t=Ds(n),r=new Date,s=IA(r,ji.MIN_HOURS_IN_ADVANCE);if(N1(t,s))throw new Error(`Booking must be at least ${ji.MIN_HOURS_IN_ADVANCE} hours in advance`);const i=Ki(r,ji.MAX_DAYS_IN_ADVANCE);if(k1(t,i))throw new Error(`Booking cannot be more than ${ji.MAX_DAYS_IN_ADVANCE} days in advance`);const o=Bn(st(me,or),ut("serviceId","==",e),ut("date","==",n),ut("status","in",[ce.PENDING,ce.CONFIRMED]));if(!(await dn(o)).empty)throw new Error("This time slot is already booked")}function G1(n,e,t){var o;const r={[ce.PENDING]:{partner:[ce.CONFIRMED,ce.REJECTED],customer:[ce.CANCELLED]},[ce.CONFIRMED]:{partner:[ce.COMPLETED],customer:[ce.CANCELLED]}},s=t?"partner":"customer";if(!(((o=r[n])==null?void 0:o[s])||[]).includes(e))throw new Error(`Invalid status transition from ${n} to ${e} for ${s}`)}class K1{async createBooking(e){try{if(await H1(e.date,e.serviceId),!await Cs.getProfileById(e.partnerId))throw new Error("Service provider not found");const r={...e,status:ce.PENDING,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return{id:(await to(st(me,or),r)).id,...r}}catch(t){throw console.error("Error creating booking:",t),t}}async getBookingById(e){try{const t=nt(me,or,e),r=await Rr(t);return r.exists()?{id:r.id,...r.data()}:null}catch(t){throw console.error("Error fetching booking:",t),t}}async getBookingsByUserId(e){try{const t=Bn(st(me,or),ut("userId","==",e));return(await dn(t)).docs.map(s=>({id:s.id,...s.data()}))}catch(t){throw console.error("Error fetching user bookings:",t),t}}async getBookingsByPartnerId(e){try{const t=Bn(st(me,or),ut("partnerId","==",e));return(await dn(t)).docs.map(s=>({id:s.id,...s.data()}))}catch(t){throw console.error("Error fetching partner bookings:",t),t}}async updateBookingStatus(e,t,r,s){try{const i=nt(me,or,e),o=await Rr(i);if(!o.exists())throw new Error("Booking not found");const c={id:o.id,...o.data()};if(s){const l=await Cs.getProfileByUserId(r);if(!l||l.id!==c.partnerId)throw new Error("Unauthorized: Not the service provider for this booking")}else if(c.userId!==r)throw new Error("Unauthorized: Not the customer for this booking");G1(c.status,t,s),await ma(i,{status:t,updatedAt:new Date().toISOString()})}catch(i){throw console.error("Error updating booking status:",i),i}}}const Jt=new K1,Z1=(n,e)=>({bookings:[],isLoading:!1,error:null,createBooking:async t=>{n({isLoading:!0,error:null});try{const r=await Jt.createBooking(t);return n(s=>({bookings:[...s.bookings,r]})),r}catch(r){const s=r instanceof Error?r.message:"Failed to create booking";throw n({error:s}),r}finally{n({isLoading:!1})}},loadUserBookings:async t=>{n({isLoading:!0,error:null});try{const r=await Jt.getBookingsByUserId(t);n({bookings:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load bookings";throw n({error:s}),r}finally{n({isLoading:!1})}},loadPartnerBookings:async t=>{n({isLoading:!0,error:null});try{const r=await Jt.getBookingsByPartnerId(t);n({bookings:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load bookings";throw n({error:s}),r}finally{n({isLoading:!1})}},acceptBooking:async t=>{n({isLoading:!0,error:null});try{const{user:r}=e();await Jt.updateBookingStatus(t,ce.CONFIRMED,r.id,!0),n(s=>({bookings:s.bookings.map(i=>i.id===t?{...i,status:ce.CONFIRMED}:i)}))}catch(r){const s=r instanceof Error?r.message:"Failed to accept booking";throw n({error:s}),r}finally{n({isLoading:!1})}},rejectBooking:async t=>{n({isLoading:!0,error:null});try{const{user:r}=e();await Jt.updateBookingStatus(t,ce.REJECTED,r.id,!0),n(s=>({bookings:s.bookings.map(i=>i.id===t?{...i,status:ce.REJECTED}:i)}))}catch(r){const s=r instanceof Error?r.message:"Failed to reject booking";throw n({error:s}),r}finally{n({isLoading:!1})}},completeBooking:async t=>{n({isLoading:!0,error:null});try{const{user:r}=e();await Jt.updateBookingStatus(t,ce.COMPLETED,r.id,!0),n(s=>({bookings:s.bookings.map(i=>i.id===t?{...i,status:ce.COMPLETED}:i)}))}catch(r){const s=r instanceof Error?r.message:"Failed to complete booking";throw n({error:s}),r}finally{n({isLoading:!1})}},cancelBooking:async t=>{n({isLoading:!0,error:null});try{const{user:r}=e();await Jt.updateBookingStatus(t,ce.CANCELLED,r.id,!1),n(s=>({bookings:s.bookings.map(i=>i.id===t?{...i,status:ce.CANCELLED}:i)}))}catch(r){const s=r instanceof Error?r.message:"Failed to cancel booking";throw n({error:s}),r}finally{n({isLoading:!1})}}}),is="services",Vh="partners",Mi={ACTIVE:"active",INACTIVE:"inactive"};class Y1{async getServicesByCategory(e){try{const t=Bn(st(me,is),ut("category","==",e),ut("status","==",Mi.ACTIVE)),r=await dn(t);return await Promise.all(r.docs.map(async i=>{const o={id:i.id,...i.data()},c=nt(me,Vh,o.partnerId),l=await Rr(c);if(!l.exists())throw new Error(`Partner not found for service ${o.id}`);return{...o,partner:{id:l.id,...l.data()}}}))}catch(t){throw console.error("Error fetching services:",t),new Error("Failed to fetch services")}}async getServicesByPartnerId(e){try{const t=Bn(st(me,is),ut("partnerId","==",e),ut("status","==",Mi.ACTIVE)),r=await dn(t),s=nt(me,Vh,e),i=await Rr(s);if(!i.exists())throw new Error("Partner not found");const o={id:i.id,...i.data()};return r.docs.map(c=>({id:c.id,...c.data(),partner:o}))}catch(t){throw console.error("Error fetching partner services:",t),new Error("Failed to fetch partner services")}}async addService(e,t){try{const r={...t,partnerId:e,status:Mi.ACTIVE,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};return{id:(await to(st(me,is),r)).id,...r}}catch(r){throw console.error("Error creating service:",r),new Error("Failed to create service")}}async updateService(e,t){try{const r=nt(me,is,e);await ma(r,{...t,updatedAt:new Date().toISOString()})}catch(r){throw console.error("Error updating service:",r),new Error("Failed to update service")}}async deleteService(e){try{const t=nt(me,is,e);await ma(t,{status:Mi.INACTIVE,updatedAt:new Date().toISOString()})}catch(t){throw console.error("Error deleting service:",t),new Error("Failed to delete service")}}}const lt=new Y1,Q1=(n,e)=>({partnerProfile:null,services:[],isLoading:!1,error:null,createProfile:async t=>{const{user:r}=e();if(!r)throw new Error("User not authenticated");n({isLoading:!0,error:null});try{const s=await Cs.createProfile(r.id,t);n({partnerProfile:s})}catch(s){const i=s instanceof Error?s.message:"Failed to create profile";throw n({error:i}),s}finally{n({isLoading:!1})}},loadProfile:async()=>{const{user:t}=e();if(t){n({isLoading:!0,error:null});try{const r=await Cs.getProfileByUserId(t.id);n({partnerProfile:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load profile";throw n({error:s}),r}finally{n({isLoading:!1})}}},loadPartnerServices:async()=>{const{partnerProfile:t}=e();if(t){n({isLoading:!0,error:null});try{const r=await lt.getServicesByPartnerId(t.id);n({services:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load services";throw n({error:s}),r}finally{n({isLoading:!1})}}},addService:async t=>{const{partnerProfile:r}=e();if(!r)throw new Error("Partner profile not found");n({isLoading:!0,error:null});try{await lt.addService(r.id,t),await e().loadPartnerServices()}catch(s){const i=s instanceof Error?s.message:"Failed to add service";throw n({error:i}),s}finally{n({isLoading:!1})}},updateService:async(t,r)=>{n({isLoading:!0,error:null});try{await lt.updateService(t,r),await e().loadPartnerServices()}catch(s){const i=s instanceof Error?s.message:"Failed to update service";throw n({error:i}),s}finally{n({isLoading:!1})}},deleteService:async t=>{n({isLoading:!0,error:null});try{await lt.deleteService(t),await e().loadPartnerServices()}catch(r){const s=r instanceof Error?r.message:"Failed to delete service";throw n({error:s}),r}finally{n({isLoading:!1})}}}),J1=(n,e)=>({services:[],partnerServices:[],isLoading:!1,error:null,loadServicesByCategory:async t=>{if(!e().isLoading){n({isLoading:!0,error:null});try{const r=await lt.getServicesByCategory(t);n({services:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load services";throw n({error:s}),r}finally{n({isLoading:!1})}}},loadServicesByPartnerId:async t=>{n({isLoading:!0,error:null});try{const r=await lt.getServicesByPartnerId(t);n({partnerServices:r})}catch(r){const s=r instanceof Error?r.message:"Failed to load partner services";throw n({error:s}),r}finally{n({isLoading:!1})}},addService:async(t,r)=>{n({isLoading:!0,error:null});try{const s=await lt.addService(t,r);n(i=>({partnerServices:[...i.partnerServices,s]}))}catch(s){const i=s instanceof Error?s.message:"Failed to add service";throw n({error:i}),s}finally{n({isLoading:!1})}},updateService:async(t,r)=>{n({isLoading:!0,error:null});try{await lt.updateService(t,r),n(s=>({partnerServices:s.partnerServices.map(i=>i.id===t?{...i,...r}:i)}))}catch(s){const i=s instanceof Error?s.message:"Failed to update service";throw n({error:i}),s}finally{n({isLoading:!1})}},deleteService:async t=>{n({isLoading:!0,error:null});try{await lt.deleteService(t),n(r=>({partnerServices:r.partnerServices.filter(s=>s.id!==t)}))}catch(r){const s=r instanceof Error?r.message:"Failed to delete service";throw n({error:s}),r}finally{n({isLoading:!1})}}}),Ie=f_()(g_(k_((n,e)=>({...EA(n,e),...Z1(n,e),...Q1(n,e),...J1(n,e)}))));function X1(){const n=gn(),{user:e,logout:t}=Ie(),r=async()=>{await t(),n("/login")};return d.jsxs(xn,{as:"div",className:"relative",children:[d.jsxs(xn.Button,{className:"flex items-center gap-2 rounded-full bg-white p-2 text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors",children:[d.jsx(Dy,{className:"h-6 w-6"}),d.jsx("span",{className:"text-sm font-medium hidden sm:block",children:e==null?void 0:e.name})]}),d.jsx(Li,{as:R.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:d.jsxs(xn.Items,{className:"absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",children:[d.jsx(xn.Item,{children:({active:s})=>d.jsx(ke,{to:"/profile",className:`${s?"bg-gray-100":""} block px-4 py-2 text-sm text-gray-700`,children:"My Profile"})}),d.jsx(xn.Item,{children:({active:s})=>d.jsx(ke,{to:"/bookings",className:`${s?"bg-gray-100":""} block px-4 py-2 text-sm text-gray-700`,children:"My Bookings"})}),d.jsx(xn.Item,{children:({active:s})=>d.jsx(ke,{to:"/settings",className:`${s?"bg-gray-100":""} block px-4 py-2 text-sm text-gray-700`,children:"Settings"})}),d.jsx("hr",{className:"my-1"}),d.jsx(xn.Item,{children:({active:s})=>d.jsx("button",{onClick:r,className:`${s?"bg-gray-100":""} block w-full text-left px-4 py-2 text-sm text-red-600`,children:"Sign out"})})]})})]})}function eS({onClose:n}){const{isAuthenticated:e,partnerProfile:t}=Ie(),r=[{to:"/",icon:by,label:"Home"},{to:"/categories",icon:dy,label:"All Services"},{to:"/contact",icon:Wh,label:"Contact Us"},{to:"/about",icon:xy,label:"About Us"}],s=[{to:"/bookings",icon:fy,label:"My Bookings"},{to:"/profile",icon:Ly,label:"Profile"},{to:"/favorites",icon:cy,label:"Favorites"},{to:"/settings",icon:yy,label:"Settings"}],i=[{to:"/partner/dashboard",icon:Hu,label:"Partner Dashboard"},{to:"/partner/orders",icon:py,label:"Orders"}],o=[{to:"/partner/register",icon:Hu,label:"Become a Partner"}],c=[...r,...e?s:[],...t?i:e?o:[]],l=()=>{n&&n()};return d.jsx("div",{className:"h-full bg-white overflow-y-auto",children:d.jsx("nav",{className:"px-4 py-6",children:c.map(({to:h,icon:m,label:g})=>d.jsxs(ke,{to:h,onClick:l,className:"flex items-center gap-3 px-4 py-3 rounded-md mb-2 transition-colors hover:bg-gray-50 text-gray-700",children:[d.jsx(m,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{className:"font-medium",children:g})]},h))})})}function tS(){const{isAuthenticated:n}=Ie(),[e,t]=R.useState(!1),r=Zg();return["/login","/register"].includes(r.pathname)?null:d.jsxs(d.Fragment,{children:[d.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50 bg-white shadow-md",children:d.jsx("div",{className:"container mx-auto px-4",children:d.jsxs("div",{className:"flex h-16 items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("button",{onClick:()=>t(!e),className:"p-2 rounded-md text-gray-600 hover:bg-gray-100",children:e?d.jsx(zh,{className:"h-6 w-6"}):d.jsx(ay,{className:"h-6 w-6"})}),d.jsx(ke,{to:"/",className:"text-2xl font-bold text-primary-600",children:"ServicePro"})]}),d.jsx("div",{className:"flex items-center gap-4",children:n?d.jsx(X1,{}):d.jsxs(d.Fragment,{children:[d.jsx(ke,{to:"/login",className:"text-gray-600 hover:text-gray-900",children:"Sign in"}),d.jsx(ke,{to:"/register",className:"btn btn-primary",children:"Sign up"})]})})]})})}),d.jsxs("div",{className:`
          fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${e?"translate-x-0":"-translate-x-full"}
        `,children:[d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50",onClick:()=>t(!1)}),d.jsx("div",{className:"fixed inset-y-0 left-0 w-64 bg-white shadow-lg pt-16",children:d.jsx(eS,{onClose:()=>t(!1)})})]})]})}function nS(){return d.jsxs("div",{className:"min-h-screen bg-gray-50",children:[d.jsx(tS,{}),d.jsx("main",{className:"container mx-auto px-4 py-8 pt-24",children:d.jsx(Bh,{})})]})}function rS({category:n}){return d.jsx(ke,{to:`/services/${n.id}`,className:"block group",children:d.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] transform",children:d.jsxs("div",{className:"flex flex-col items-center text-center",children:[d.jsx("span",{className:"text-6xl mb-6 transition-transform duration-200 group-hover:scale-110",children:n.icon}),d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:n.title}),d.jsx("p",{className:"text-gray-600",children:n.description})]})})})}const oi=[{id:"beauty",title:"Beauty & Wellness",icon:"💅",description:"Professional beauty services at your doorstep"},{id:"home",title:"Home Services",icon:"🔧",description:"Expert home maintenance and repair"},{id:"cleaning",title:"Cleaning",icon:"🧹",description:"Professional cleaning services"},{id:"tutoring",title:"Tutoring",icon:"📚",description:"Expert tutors for all subjects"},{id:"appliance",title:"Appliance Repair",icon:"🔌",description:"Quick and reliable appliance repairs"},{id:"training",title:"Personal Training",icon:"💪",description:"Professional fitness training"}];function sS(){return d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:oi.map(n=>d.jsx(rS,{category:n},n.id))})}function iS(){return d.jsxs("div",{className:"container mx-auto px-4 py-12",children:[d.jsxs("div",{className:"text-center mb-16",children:[d.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"Find Professional Services"}),d.jsx("p",{className:"text-xl text-gray-600 max-w-2xl mx-auto",children:"Book trusted professionals for all your needs"})]}),d.jsx(sS,{})]})}function tt(){return d.jsx("div",{className:"flex justify-center",children:d.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"})})}function aS({service:n,isOwnService:e}){return d.jsx("div",{className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow",children:d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl",children:n.partner.businessName.charAt(0)}),d.jsxs("div",{className:"flex-grow",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("h2",{className:"text-xl font-semibold",children:n.name}),e&&d.jsx("span",{className:"bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full",children:"Your Service"})]}),d.jsx("p",{className:"text-gray-600",children:n.description}),d.jsxs("p",{className:"text-sm text-gray-500",children:["by ",n.partner.businessName]})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("p",{className:"text-xl font-semibold text-primary-600",children:["$",n.price]}),d.jsxs("p",{className:"text-sm text-gray-500",children:[n.duration," min"]}),e?d.jsx(ke,{to:"/partner/dashboard",className:"btn btn-secondary mt-2 text-sm",children:"Manage Service"}):d.jsx(ke,{to:`/service/${n.partner.id}`,className:"btn btn-primary mt-2 text-sm",children:"View Details"})]})]})})}function oS(){const{categoryId:n}=Sa(),{services:e,loadServicesByCategory:t,isLoading:r,error:s,user:i}=Ie();return R.useEffect(()=>{n&&t(n).catch(console.error)},[n,t]),r?d.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:d.jsx(tt,{})}):s?d.jsx("div",{className:"text-center py-12",children:d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md",children:s})}):e.length?d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsx("div",{className:"grid gap-6",children:e.map(o=>{const c=(i==null?void 0:i.id)===o.partner.userId;return d.jsx(aS,{service:o,isOwnService:c},o.id)})})}):d.jsx("div",{className:"text-center py-12",children:d.jsx("p",{className:"text-gray-600",children:"No services available in this category yet."})})}function cS(){const n=gn(),{providerId:e}=Sa(),{user:t}=Ie(),[r,s]=R.useState([]),[i,o]=R.useState(!0),[c,l]=R.useState(null);if(R.useEffect(()=>{(async()=>{if(e)try{o(!0);const w=await lt.getServicesByPartnerId(e);s(w)}catch(w){l(w instanceof Error?w.message:"Failed to load service details")}finally{o(!1)}})()},[e]),i)return d.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:d.jsx(tt,{})});if(c)return d.jsx("div",{className:"text-center py-12",children:d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md",children:c})});if(r.length===0)return d.jsx("div",{className:"text-center py-12",children:d.jsx("p",{className:"text-gray-600",children:"No services found for this provider"})});const h=r[0].partner;return(t==null?void 0:t.id)===h.userId?(n("/partner/dashboard"),null):d.jsx("div",{className:"max-w-3xl mx-auto",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-6 mb-6",children:[d.jsx("div",{className:"w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl",children:h.businessName.charAt(0)}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl font-bold mb-2",children:h.businessName}),d.jsxs("div",{className:"flex items-center gap-1",children:[d.jsx("span",{className:"text-yellow-500",children:"⭐"}),d.jsxs("span",{className:"text-gray-600",children:[h.rating||"New"," (",h.reviewCount||0," reviews)"]})]})]})]}),d.jsxs("div",{className:"mb-6",children:[d.jsx("h2",{className:"text-xl font-semibold mb-2",children:"About"}),d.jsx("p",{className:"text-gray-600",children:h.description})]}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Services"}),d.jsx("div",{className:"grid gap-4",children:r.map(g=>d.jsxs("div",{className:"border rounded-lg p-4",children:[d.jsxs("div",{className:"flex justify-between items-start mb-2",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold",children:g.name}),d.jsx("p",{className:"text-sm text-gray-600",children:g.description})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("p",{className:"text-lg font-semibold text-primary-600",children:["$",g.price]}),d.jsxs("p",{className:"text-sm text-gray-500",children:[g.duration," min"]})]})]}),d.jsx(ke,{to:`/booking/${h.id}/${g.id}`,className:"btn btn-primary w-full text-center",children:"Book Now"})]},g.id))})]})]})})}function lS(){const n=gn(),{providerId:e,serviceId:t}=Sa(),{user:r,createBooking:s,isLoading:i}=Ie(),[o,c]=R.useState(null),[l,h]=R.useState(gr(Ki(new Date,1),"yyyy-MM-dd")),[m,g]=R.useState(kh[0]),[w,E]=R.useState(null),[k,N]=R.useState(!0);if(R.useEffect(()=>{(async()=>{if(!(!t||!e))try{N(!0);const ve=(await lt.getServicesByPartnerId(e)).find(le=>le.id===t);if(!ve)throw new Error("Service not found");c(ve)}catch(J){E("Failed to load service details"),console.error(J)}finally{N(!1)}})()},[t,e]),k)return d.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:d.jsx(tt,{})});if(!o||!r)return d.jsx("div",{className:"text-center py-12",children:d.jsx("p",{className:"text-red-600",children:"Service not found or user not authenticated"})});const C=async $=>{$.preventDefault(),E(null);try{const J=await s({userId:r.id,userName:r.name,partnerId:e,serviceId:t,date:`${l}T${m}`,price:o.price,serviceName:o.name,partnerName:o.partner.businessName});n(`/booking/confirmation/${J.id}`)}catch(J){E(J instanceof Error?J.message:"Booking failed")}},F=gr(Ki(new Date,1),"yyyy-MM-dd"),j=gr(Ki(new Date,30),"yyyy-MM-dd");return d.jsx("div",{className:"max-w-2xl mx-auto",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsx("h1",{className:"text-2xl font-bold mb-6",children:"Book Service"}),w&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",children:w}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:[d.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[d.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl",children:o.partner.businessName.charAt(0)}),d.jsxs("div",{children:[d.jsx("h2",{className:"font-semibold",children:o.partner.businessName}),d.jsx("p",{className:"text-gray-600",children:o.name})]}),d.jsx("div",{className:"ml-auto",children:d.jsxs("p",{className:"text-xl font-semibold text-primary-600",children:["$",o.price]})})]}),d.jsx("p",{className:"text-sm text-gray-600",children:o.description})]}),d.jsxs("form",{onSubmit:C,className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Date"}),d.jsx("input",{type:"date",value:l,onChange:$=>h($.target.value),className:"input",min:F,max:j,required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"Select Time"}),d.jsx("select",{value:m,onChange:$=>g($.target.value),className:"input",required:!0,children:kh.map($=>d.jsx("option",{value:$,children:$},$))})]}),d.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:i,children:i?"Confirming booking...":"Confirm Booking"})]})]})})}function uS(){const{bookingId:n}=Sa(),[e,t]=R.useState(null),[r,s]=R.useState(!0),[i,o]=R.useState(null);return R.useEffect(()=>{(async()=>{if(n)try{s(!0);const l=await Jt.getBookingById(n);if(!l)throw new Error("Booking not found");t(l)}catch(l){o(l instanceof Error?l.message:"Failed to load booking")}finally{s(!1)}})()},[n]),r?d.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:d.jsx(tt,{})}):i||!e?d.jsx("div",{className:"text-center py-12",children:d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md",children:i||"Booking not found"})}):d.jsx("div",{className:"max-w-2xl mx-auto",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsxs("div",{className:"text-center mb-8",children:[d.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx("svg",{className:"w-8 h-8 text-green-500",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}),d.jsx("h1",{className:"text-2xl font-bold text-green-600",children:"Booking Confirmed!"})]}),d.jsx("div",{className:"border-t border-b py-4 mb-6",children:d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Service"}),d.jsx("p",{className:"font-semibold",children:e.serviceName})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Provider"}),d.jsx("p",{className:"font-semibold",children:e.partnerName})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Date & Time"}),d.jsx("p",{className:"font-semibold",children:gr(Ds(e.date),"PPp")})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Price"}),d.jsxs("p",{className:"font-semibold",children:["$",e.price]})]})]})}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx(ke,{to:"/bookings",className:"btn btn-primary flex-1",children:"View My Bookings"}),d.jsx(ke,{to:"/",className:"btn btn-secondary flex-1",children:"Book Another Service"})]})]})})}function dS(){const n=gn(),{login:e,isLoading:t}=Ie(),[r,s]=R.useState(""),[i,o]=R.useState(""),[c,l]=R.useState(""),h=async m=>{m.preventDefault(),l("");try{await e(r,i),n("/")}catch{debugger;l("Invalid email or password")}};return d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4",children:d.jsxs("div",{className:"max-w-md w-full space-y-8",children:[d.jsx("div",{children:d.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Sign in to your account"})}),d.jsxs("form",{className:"mt-8 space-y-6",onSubmit:h,children:[c&&d.jsx("div",{className:"text-red-600 text-sm text-center",children:c}),d.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[d.jsx("div",{children:d.jsx("input",{type:"email",required:!0,className:"input rounded-t-md rounded-b-none",placeholder:"Email address",value:r,onChange:m=>s(m.target.value)})}),d.jsx("div",{children:d.jsx("input",{type:"password",required:!0,className:"input rounded-t-none rounded-b-md",placeholder:"Password",value:i,onChange:m=>o(m.target.value)})})]}),d.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:t,children:t?"Signing in...":"Sign in"})]}),d.jsx("div",{className:"text-center",children:d.jsx(ke,{to:"/register",className:"text-primary-600 hover:text-primary-500",children:"Don't have an account? Sign up"})})]})})}var re;(function(n){n.assertEqual=s=>s;function e(s){}n.assertIs=e;function t(s){throw new Error}n.assertNever=t,n.arrayToEnum=s=>{const i={};for(const o of s)i[o]=o;return i},n.getValidEnumValues=s=>{const i=n.objectKeys(s).filter(c=>typeof s[s[c]]!="number"),o={};for(const c of i)o[c]=s[c];return n.objectValues(o)},n.objectValues=s=>n.objectKeys(s).map(function(i){return s[i]}),n.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const i=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&i.push(o);return i},n.find=(s,i)=>{for(const o of s)if(i(o))return o},n.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&isFinite(s)&&Math.floor(s)===s;function r(s,i=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(i)}n.joinValues=r,n.jsonStringifyReplacer=(s,i)=>typeof i=="bigint"?i.toString():i})(re||(re={}));var Mc;(function(n){n.mergeShapes=(e,t)=>({...e,...t})})(Mc||(Mc={}));const L=re.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Dt=n=>{switch(typeof n){case"undefined":return L.undefined;case"string":return L.string;case"number":return isNaN(n)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(n)?L.array:n===null?L.null:n.then&&typeof n.then=="function"&&n.catch&&typeof n.catch=="function"?L.promise:typeof Map<"u"&&n instanceof Map?L.map:typeof Set<"u"&&n instanceof Set?L.set:typeof Date<"u"&&n instanceof Date?L.date:L.object;default:return L.unknown}},D=re.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),hS=n=>JSON.stringify(n,null,2).replace(/"([^"]+)":/g,"$1:");class Je extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name="ZodError",this.issues=e}format(e){const t=e||function(i){return i.message},r={_errors:[]},s=i=>{for(const o of i.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(t(o));else{let c=r,l=0;for(;l<o.path.length;){const h=o.path[l];l===o.path.length-1?(c[h]=c[h]||{_errors:[]},c[h]._errors.push(t(o))):c[h]=c[h]||{_errors:[]},c=c[h],l++}}};return s(this),r}static assert(e){if(!(e instanceof Je))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,re.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=t=>t.message){const t={},r=[];for(const s of this.issues)s.path.length>0?(t[s.path[0]]=t[s.path[0]]||[],t[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:t}}get formErrors(){return this.flatten()}}Je.create=n=>new Je(n);const kr=(n,e)=>{let t;switch(n.code){case D.invalid_type:n.received===L.undefined?t="Required":t=`Expected ${n.expected}, received ${n.received}`;break;case D.invalid_literal:t=`Invalid literal value, expected ${JSON.stringify(n.expected,re.jsonStringifyReplacer)}`;break;case D.unrecognized_keys:t=`Unrecognized key(s) in object: ${re.joinValues(n.keys,", ")}`;break;case D.invalid_union:t="Invalid input";break;case D.invalid_union_discriminator:t=`Invalid discriminator value. Expected ${re.joinValues(n.options)}`;break;case D.invalid_enum_value:t=`Invalid enum value. Expected ${re.joinValues(n.options)}, received '${n.received}'`;break;case D.invalid_arguments:t="Invalid function arguments";break;case D.invalid_return_type:t="Invalid function return type";break;case D.invalid_date:t="Invalid date";break;case D.invalid_string:typeof n.validation=="object"?"includes"in n.validation?(t=`Invalid input: must include "${n.validation.includes}"`,typeof n.validation.position=="number"&&(t=`${t} at one or more positions greater than or equal to ${n.validation.position}`)):"startsWith"in n.validation?t=`Invalid input: must start with "${n.validation.startsWith}"`:"endsWith"in n.validation?t=`Invalid input: must end with "${n.validation.endsWith}"`:re.assertNever(n.validation):n.validation!=="regex"?t=`Invalid ${n.validation}`:t="Invalid";break;case D.too_small:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at least":"more than"} ${n.minimum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at least":"over"} ${n.minimum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${n.minimum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly equal to ":n.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(n.minimum))}`:t="Invalid input";break;case D.too_big:n.type==="array"?t=`Array must contain ${n.exact?"exactly":n.inclusive?"at most":"less than"} ${n.maximum} element(s)`:n.type==="string"?t=`String must contain ${n.exact?"exactly":n.inclusive?"at most":"under"} ${n.maximum} character(s)`:n.type==="number"?t=`Number must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="bigint"?t=`BigInt must be ${n.exact?"exactly":n.inclusive?"less than or equal to":"less than"} ${n.maximum}`:n.type==="date"?t=`Date must be ${n.exact?"exactly":n.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(n.maximum))}`:t="Invalid input";break;case D.custom:t="Invalid input";break;case D.invalid_intersection_types:t="Intersection results could not be merged";break;case D.not_multiple_of:t=`Number must be a multiple of ${n.multipleOf}`;break;case D.not_finite:t="Number must be finite";break;default:t=e.defaultError,re.assertNever(n)}return{message:t}};let tg=kr;function fS(n){tg=n}function wa(){return tg}const Ea=n=>{const{data:e,path:t,errorMaps:r,issueData:s}=n,i=[...t,...s.path||[]],o={...s,path:i};if(s.message!==void 0)return{...s,path:i,message:s.message};let c="";const l=r.filter(h=>!!h).slice().reverse();for(const h of l)c=h(o,{data:e,defaultError:c}).message;return{...s,path:i,message:c}},mS=[];function M(n,e){const t=wa(),r=Ea({issueData:e,data:n.data,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,t,t===kr?void 0:kr].filter(s=>!!s)});n.common.issues.push(r)}class Be{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const r=[];for(const s of t){if(s.status==="aborted")return G;s.status==="dirty"&&e.dirty(),r.push(s.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,t){const r=[];for(const s of t){const i=await s.key,o=await s.value;r.push({key:i,value:o})}return Be.mergeObjectSync(e,r)}static mergeObjectSync(e,t){const r={};for(const s of t){const{key:i,value:o}=s;if(i.status==="aborted"||o.status==="aborted")return G;i.status==="dirty"&&e.dirty(),o.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[i.value]=o.value)}return{status:e.value,value:r}}}const G=Object.freeze({status:"aborted"}),ur=n=>({status:"dirty",value:n}),ze=n=>({status:"valid",value:n}),Lc=n=>n.status==="aborted",Fc=n=>n.status==="dirty",Wn=n=>n.status==="valid",js=n=>typeof Promise<"u"&&n instanceof Promise;function Ta(n,e,t,r){if(typeof e=="function"?n!==e||!r:!e.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return e.get(n)}function ng(n,e,t,r,s){if(typeof e=="function"?n!==e||!s:!e.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return e.set(n,t),t}var q;(function(n){n.errToObj=e=>typeof e=="string"?{message:e}:e||{},n.toString=e=>typeof e=="string"?e:e==null?void 0:e.message})(q||(q={}));var hs,fs;class St{constructor(e,t,r,s){this._cachedPath=[],this.parent=e,this.data=t,this._path=r,this._key=s}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const Mh=(n,e)=>{if(Wn(e))return{success:!0,data:e.value};if(!n.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const t=new Je(n.common.issues);return this._error=t,this._error}}};function Q(n){if(!n)return{};const{errorMap:e,invalid_type_error:t,required_error:r,description:s}=n;if(e&&(t||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:s}:{errorMap:(o,c)=>{var l,h;const{message:m}=n;return o.code==="invalid_enum_value"?{message:m??c.defaultError}:typeof c.data>"u"?{message:(l=m??r)!==null&&l!==void 0?l:c.defaultError}:o.code!=="invalid_type"?{message:c.defaultError}:{message:(h=m??t)!==null&&h!==void 0?h:c.defaultError}},description:s}}class X{get description(){return this._def.description}_getType(e){return Dt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Dt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Be,ctx:{common:e.parent.common,data:e.data,parsedType:Dt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(js(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const r=this.safeParse(e,t);if(r.success)return r.data;throw r.error}safeParse(e,t){var r;const s={common:{issues:[],async:(r=t==null?void 0:t.async)!==null&&r!==void 0?r:!1,contextualErrorMap:t==null?void 0:t.errorMap},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dt(e)},i=this._parseSync({data:e,path:s.path,parent:s});return Mh(s,i)}"~validate"(e){var t,r;const s={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dt(e)};if(!this["~standard"].async)try{const i=this._parseSync({data:e,path:[],parent:s});return Wn(i)?{value:i.value}:{issues:s.common.issues}}catch(i){!((r=(t=i==null?void 0:i.message)===null||t===void 0?void 0:t.toLowerCase())===null||r===void 0)&&r.includes("encountered")&&(this["~standard"].async=!0),s.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:s}).then(i=>Wn(i)?{value:i.value}:{issues:s.common.issues})}async parseAsync(e,t){const r=await this.safeParseAsync(e,t);if(r.success)return r.data;throw r.error}async safeParseAsync(e,t){const r={common:{issues:[],contextualErrorMap:t==null?void 0:t.errorMap,async:!0},path:(t==null?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Dt(e)},s=this._parse({data:e,path:r.path,parent:r}),i=await(js(s)?s:Promise.resolve(s));return Mh(r,i)}refine(e,t){const r=s=>typeof t=="string"||typeof t>"u"?{message:t}:typeof t=="function"?t(s):t;return this._refinement((s,i)=>{const o=e(s),c=()=>i.addIssue({code:D.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(c(),!1)):o?!0:(c(),!1)})}refinement(e,t){return this._refinement((r,s)=>e(r)?!0:(s.addIssue(typeof t=="function"?t(r,s):t),!1))}_refinement(e){return new _t({schema:this,typeName:z.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:t=>this["~validate"](t)}}optional(){return It.create(this,this._def)}nullable(){return pn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ft.create(this)}promise(){return Pr.create(this,this._def)}or(e){return Fs.create([this,e],this._def)}and(e){return Us.create(this,e,this._def)}transform(e){return new _t({...Q(this._def),schema:this,typeName:z.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e=="function"?e:()=>e;return new zs({...Q(this._def),innerType:this,defaultValue:t,typeName:z.ZodDefault})}brand(){return new $l({typeName:z.ZodBranded,type:this,...Q(this._def)})}catch(e){const t=typeof e=="function"?e:()=>e;return new Hs({...Q(this._def),innerType:this,catchValue:t,typeName:z.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ci.create(this,e)}readonly(){return Gs.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const pS=/^c[^\s-]{8,}$/i,gS=/^[0-9a-z]+$/,yS=/^[0-9A-HJKMNP-TV-Z]{26}$/i,_S=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,vS=/^[a-z0-9_-]{21}$/i,wS=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,ES=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,TS=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,bS="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let nc;const IS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,xS=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,AS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,SS=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,RS=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,kS=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,rg="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",NS=new RegExp(`^${rg}$`);function sg(n){let e="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";return n.precision?e=`${e}\\.\\d{${n.precision}}`:n.precision==null&&(e=`${e}(\\.\\d+)?`),e}function PS(n){return new RegExp(`^${sg(n)}$`)}function ig(n){let e=`${rg}T${sg(n)}`;const t=[];return t.push(n.local?"Z?":"Z"),n.offset&&t.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${t.join("|")})`,new RegExp(`^${e}$`)}function CS(n,e){return!!((e==="v4"||!e)&&IS.test(n)||(e==="v6"||!e)&&AS.test(n))}function OS(n,e){if(!wS.test(n))return!1;try{const[t]=n.split("."),r=t.replace(/-/g,"+").replace(/_/g,"/").padEnd(t.length+(4-t.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||!s.typ||!s.alg||e&&s.alg!==e)}catch{return!1}}function DS(n,e){return!!((e==="v4"||!e)&&xS.test(n)||(e==="v6"||!e)&&SS.test(n))}class ht extends X{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){const i=this._getOrReturnCtx(e);return M(i,{code:D.invalid_type,expected:L.string,received:i.parsedType}),G}const r=new Be;let s;for(const i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:D.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:D.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){const o=e.data.length>i.value,c=e.data.length<i.value;(o||c)&&(s=this._getOrReturnCtx(e,s),o?M(s,{code:D.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):c&&M(s,{code:D.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")TS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"email",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")nc||(nc=new RegExp(bS,"u")),nc.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"emoji",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")_S.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"uuid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")vS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"nanoid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")pS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cuid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")gS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cuid2",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")yS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"ulid",code:D.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{s=this._getOrReturnCtx(e,s),M(s,{validation:"url",code:D.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"regex",code:D.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?ig(i).test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?NS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?PS(i).test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{code:D.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?ES.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"duration",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?CS(e.data,i.version)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"ip",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?OS(e.data,i.alg)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"jwt",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?DS(e.data,i.version)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"cidr",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?RS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"base64",code:D.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?kS.test(e.data)||(s=this._getOrReturnCtx(e,s),M(s,{validation:"base64url",code:D.invalid_string,message:i.message}),r.dirty()):re.assertNever(i);return{status:r.value,value:e.data}}_regex(e,t,r){return this.refinement(s=>e.test(s),{validation:t,code:D.invalid_string,...q.errToObj(r)})}_addCheck(e){return new ht({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...q.errToObj(e)})}url(e){return this._addCheck({kind:"url",...q.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...q.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...q.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...q.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...q.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...q.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...q.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...q.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...q.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...q.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...q.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...q.errToObj(e)})}datetime(e){var t,r;return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,offset:(t=e==null?void 0:e.offset)!==null&&t!==void 0?t:!1,local:(r=e==null?void 0:e.local)!==null&&r!==void 0?r:!1,...q.errToObj(e==null?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e==null?void 0:e.precision)>"u"?null:e==null?void 0:e.precision,...q.errToObj(e==null?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...q.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...q.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t==null?void 0:t.position,...q.errToObj(t==null?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...q.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...q.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...q.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...q.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...q.errToObj(t)})}nonempty(e){return this.min(1,q.errToObj(e))}trim(){return new ht({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ht({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ht({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ht.create=n=>{var e;return new ht({checks:[],typeName:z.ZodString,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Q(n)})};function jS(n,e){const t=(n.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,s=t>r?t:r,i=parseInt(n.toFixed(s).replace(".","")),o=parseInt(e.toFixed(s).replace(".",""));return i%o/Math.pow(10,s)}class hn extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){const i=this._getOrReturnCtx(e);return M(i,{code:D.invalid_type,expected:L.number,received:i.parsedType}),G}let r;const s=new Be;for(const i of this._def.checks)i.kind==="int"?re.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:D.invalid_type,expected:"integer",received:"float",message:i.message}),s.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),s.dirty()):i.kind==="multipleOf"?jS(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),M(r,{code:D.not_finite,message:i.message}),s.dirty()):re.assertNever(i);return{status:s.value,value:e.data}}gte(e,t){return this.setLimit("min",e,!0,q.toString(t))}gt(e,t){return this.setLimit("min",e,!1,q.toString(t))}lte(e,t){return this.setLimit("max",e,!0,q.toString(t))}lt(e,t){return this.setLimit("max",e,!1,q.toString(t))}setLimit(e,t,r,s){return new hn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:q.toString(s)}]})}_addCheck(e){return new hn({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:q.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:q.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:q.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:q.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:q.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:q.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:q.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:q.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:q.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&re.isInteger(e.value))}get isFinite(){let e=null,t=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(t===null||r.value>t)&&(t=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(t)&&Number.isFinite(e)}}hn.create=n=>new hn({checks:[],typeName:z.ZodNumber,coerce:(n==null?void 0:n.coerce)||!1,...Q(n)});class fn extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==L.bigint)return this._getInvalidInput(e);let r;const s=new Be;for(const i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),s.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),M(r,{code:D.not_multiple_of,multipleOf:i.value,message:i.message}),s.dirty()):re.assertNever(i);return{status:s.value,value:e.data}}_getInvalidInput(e){const t=this._getOrReturnCtx(e);return M(t,{code:D.invalid_type,expected:L.bigint,received:t.parsedType}),G}gte(e,t){return this.setLimit("min",e,!0,q.toString(t))}gt(e,t){return this.setLimit("min",e,!1,q.toString(t))}lte(e,t){return this.setLimit("max",e,!0,q.toString(t))}lt(e,t){return this.setLimit("max",e,!1,q.toString(t))}setLimit(e,t,r,s){return new fn({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:r,message:q.toString(s)}]})}_addCheck(e){return new fn({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:q.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:q.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:q.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:q.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:q.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}fn.create=n=>{var e;return new fn({checks:[],typeName:z.ZodBigInt,coerce:(e=n==null?void 0:n.coerce)!==null&&e!==void 0?e:!1,...Q(n)})};class Vs extends X{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.boolean,received:r.parsedType}),G}return ze(e.data)}}Vs.create=n=>new Vs({typeName:z.ZodBoolean,coerce:(n==null?void 0:n.coerce)||!1,...Q(n)});class zn extends X{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){const i=this._getOrReturnCtx(e);return M(i,{code:D.invalid_type,expected:L.date,received:i.parsedType}),G}if(isNaN(e.data.getTime())){const i=this._getOrReturnCtx(e);return M(i,{code:D.invalid_date}),G}const r=new Be;let s;for(const i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:D.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(s=this._getOrReturnCtx(e,s),M(s,{code:D.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):re.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new zn({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:q.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:q.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}zn.create=n=>new zn({checks:[],coerce:(n==null?void 0:n.coerce)||!1,typeName:z.ZodDate,...Q(n)});class ba extends X{_parse(e){if(this._getType(e)!==L.symbol){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.symbol,received:r.parsedType}),G}return ze(e.data)}}ba.create=n=>new ba({typeName:z.ZodSymbol,...Q(n)});class Ms extends X{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.undefined,received:r.parsedType}),G}return ze(e.data)}}Ms.create=n=>new Ms({typeName:z.ZodUndefined,...Q(n)});class Ls extends X{_parse(e){if(this._getType(e)!==L.null){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.null,received:r.parsedType}),G}return ze(e.data)}}Ls.create=n=>new Ls({typeName:z.ZodNull,...Q(n)});class Nr extends X{constructor(){super(...arguments),this._any=!0}_parse(e){return ze(e.data)}}Nr.create=n=>new Nr({typeName:z.ZodAny,...Q(n)});class On extends X{constructor(){super(...arguments),this._unknown=!0}_parse(e){return ze(e.data)}}On.create=n=>new On({typeName:z.ZodUnknown,...Q(n)});class zt extends X{_parse(e){const t=this._getOrReturnCtx(e);return M(t,{code:D.invalid_type,expected:L.never,received:t.parsedType}),G}}zt.create=n=>new zt({typeName:z.ZodNever,...Q(n)});class Ia extends X{_parse(e){if(this._getType(e)!==L.undefined){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.void,received:r.parsedType}),G}return ze(e.data)}}Ia.create=n=>new Ia({typeName:z.ZodVoid,...Q(n)});class ft extends X{_parse(e){const{ctx:t,status:r}=this._processInputParams(e),s=this._def;if(t.parsedType!==L.array)return M(t,{code:D.invalid_type,expected:L.array,received:t.parsedType}),G;if(s.exactLength!==null){const o=t.data.length>s.exactLength.value,c=t.data.length<s.exactLength.value;(o||c)&&(M(t,{code:o?D.too_big:D.too_small,minimum:c?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&t.data.length<s.minLength.value&&(M(t,{code:D.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&t.data.length>s.maxLength.value&&(M(t,{code:D.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),t.common.async)return Promise.all([...t.data].map((o,c)=>s.type._parseAsync(new St(t,o,t.path,c)))).then(o=>Be.mergeArray(r,o));const i=[...t.data].map((o,c)=>s.type._parseSync(new St(t,o,t.path,c)));return Be.mergeArray(r,i)}get element(){return this._def.type}min(e,t){return new ft({...this._def,minLength:{value:e,message:q.toString(t)}})}max(e,t){return new ft({...this._def,maxLength:{value:e,message:q.toString(t)}})}length(e,t){return new ft({...this._def,exactLength:{value:e,message:q.toString(t)}})}nonempty(e){return this.min(1,e)}}ft.create=(n,e)=>new ft({type:n,minLength:null,maxLength:null,exactLength:null,typeName:z.ZodArray,...Q(e)});function cr(n){if(n instanceof fe){const e={};for(const t in n.shape){const r=n.shape[t];e[t]=It.create(cr(r))}return new fe({...n._def,shape:()=>e})}else return n instanceof ft?new ft({...n._def,type:cr(n.element)}):n instanceof It?It.create(cr(n.unwrap())):n instanceof pn?pn.create(cr(n.unwrap())):n instanceof Rt?Rt.create(n.items.map(e=>cr(e))):n}class fe extends X{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape(),t=re.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==L.object){const h=this._getOrReturnCtx(e);return M(h,{code:D.invalid_type,expected:L.object,received:h.parsedType}),G}const{status:r,ctx:s}=this._processInputParams(e),{shape:i,keys:o}=this._getCached(),c=[];if(!(this._def.catchall instanceof zt&&this._def.unknownKeys==="strip"))for(const h in s.data)o.includes(h)||c.push(h);const l=[];for(const h of o){const m=i[h],g=s.data[h];l.push({key:{status:"valid",value:h},value:m._parse(new St(s,g,s.path,h)),alwaysSet:h in s.data})}if(this._def.catchall instanceof zt){const h=this._def.unknownKeys;if(h==="passthrough")for(const m of c)l.push({key:{status:"valid",value:m},value:{status:"valid",value:s.data[m]}});else if(h==="strict")c.length>0&&(M(s,{code:D.unrecognized_keys,keys:c}),r.dirty());else if(h!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const h=this._def.catchall;for(const m of c){const g=s.data[m];l.push({key:{status:"valid",value:m},value:h._parse(new St(s,g,s.path,m)),alwaysSet:m in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const h=[];for(const m of l){const g=await m.key,w=await m.value;h.push({key:g,value:w,alwaysSet:m.alwaysSet})}return h}).then(h=>Be.mergeObjectSync(r,h)):Be.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return q.errToObj,new fe({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,r)=>{var s,i,o,c;const l=(o=(i=(s=this._def).errorMap)===null||i===void 0?void 0:i.call(s,t,r).message)!==null&&o!==void 0?o:r.defaultError;return t.code==="unrecognized_keys"?{message:(c=q.errToObj(e).message)!==null&&c!==void 0?c:l}:{message:l}}}:{}})}strip(){return new fe({...this._def,unknownKeys:"strip"})}passthrough(){return new fe({...this._def,unknownKeys:"passthrough"})}extend(e){return new fe({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new fe({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:z.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new fe({...this._def,catchall:e})}pick(e){const t={};return re.objectKeys(e).forEach(r=>{e[r]&&this.shape[r]&&(t[r]=this.shape[r])}),new fe({...this._def,shape:()=>t})}omit(e){const t={};return re.objectKeys(this.shape).forEach(r=>{e[r]||(t[r]=this.shape[r])}),new fe({...this._def,shape:()=>t})}deepPartial(){return cr(this)}partial(e){const t={};return re.objectKeys(this.shape).forEach(r=>{const s=this.shape[r];e&&!e[r]?t[r]=s:t[r]=s.optional()}),new fe({...this._def,shape:()=>t})}required(e){const t={};return re.objectKeys(this.shape).forEach(r=>{if(e&&!e[r])t[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof It;)i=i._def.innerType;t[r]=i}}),new fe({...this._def,shape:()=>t})}keyof(){return ag(re.objectKeys(this.shape))}}fe.create=(n,e)=>new fe({shape:()=>n,unknownKeys:"strip",catchall:zt.create(),typeName:z.ZodObject,...Q(e)});fe.strictCreate=(n,e)=>new fe({shape:()=>n,unknownKeys:"strict",catchall:zt.create(),typeName:z.ZodObject,...Q(e)});fe.lazycreate=(n,e)=>new fe({shape:n,unknownKeys:"strip",catchall:zt.create(),typeName:z.ZodObject,...Q(e)});class Fs extends X{_parse(e){const{ctx:t}=this._processInputParams(e),r=this._def.options;function s(i){for(const c of i)if(c.result.status==="valid")return c.result;for(const c of i)if(c.result.status==="dirty")return t.common.issues.push(...c.ctx.common.issues),c.result;const o=i.map(c=>new Je(c.ctx.common.issues));return M(t,{code:D.invalid_union,unionErrors:o}),G}if(t.common.async)return Promise.all(r.map(async i=>{const o={...t,common:{...t.common,issues:[]},parent:null};return{result:await i._parseAsync({data:t.data,path:t.path,parent:o}),ctx:o}})).then(s);{let i;const o=[];for(const l of r){const h={...t,common:{...t.common,issues:[]},parent:null},m=l._parseSync({data:t.data,path:t.path,parent:h});if(m.status==="valid")return m;m.status==="dirty"&&!i&&(i={result:m,ctx:h}),h.common.issues.length&&o.push(h.common.issues)}if(i)return t.common.issues.push(...i.ctx.common.issues),i.result;const c=o.map(l=>new Je(l));return M(t,{code:D.invalid_union,unionErrors:c}),G}}get options(){return this._def.options}}Fs.create=(n,e)=>new Fs({options:n,typeName:z.ZodUnion,...Q(e)});const Ot=n=>n instanceof $s?Ot(n.schema):n instanceof _t?Ot(n.innerType()):n instanceof qs?[n.value]:n instanceof mn?n.options:n instanceof Ws?re.objectValues(n.enum):n instanceof zs?Ot(n._def.innerType):n instanceof Ms?[void 0]:n instanceof Ls?[null]:n instanceof It?[void 0,...Ot(n.unwrap())]:n instanceof pn?[null,...Ot(n.unwrap())]:n instanceof $l||n instanceof Gs?Ot(n.unwrap()):n instanceof Hs?Ot(n._def.innerType):[];class oo extends X{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==L.object)return M(t,{code:D.invalid_type,expected:L.object,received:t.parsedType}),G;const r=this.discriminator,s=t.data[r],i=this.optionsMap.get(s);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(M(t,{code:D.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),G)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,t,r){const s=new Map;for(const i of t){const o=Ot(i.shape[e]);if(!o.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const c of o){if(s.has(c))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(c)}`);s.set(c,i)}}return new oo({typeName:z.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:s,...Q(r)})}}function Uc(n,e){const t=Dt(n),r=Dt(e);if(n===e)return{valid:!0,data:n};if(t===L.object&&r===L.object){const s=re.objectKeys(e),i=re.objectKeys(n).filter(c=>s.indexOf(c)!==-1),o={...n,...e};for(const c of i){const l=Uc(n[c],e[c]);if(!l.valid)return{valid:!1};o[c]=l.data}return{valid:!0,data:o}}else if(t===L.array&&r===L.array){if(n.length!==e.length)return{valid:!1};const s=[];for(let i=0;i<n.length;i++){const o=n[i],c=e[i],l=Uc(o,c);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return t===L.date&&r===L.date&&+n==+e?{valid:!0,data:n}:{valid:!1}}class Us extends X{_parse(e){const{status:t,ctx:r}=this._processInputParams(e),s=(i,o)=>{if(Lc(i)||Lc(o))return G;const c=Uc(i.value,o.value);return c.valid?((Fc(i)||Fc(o))&&t.dirty(),{status:t.value,value:c.data}):(M(r,{code:D.invalid_intersection_types}),G)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,o])=>s(i,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}Us.create=(n,e,t)=>new Us({left:n,right:e,typeName:z.ZodIntersection,...Q(t)});class Rt extends X{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.array)return M(r,{code:D.invalid_type,expected:L.array,received:r.parsedType}),G;if(r.data.length<this._def.items.length)return M(r,{code:D.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),G;!this._def.rest&&r.data.length>this._def.items.length&&(M(r,{code:D.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),t.dirty());const i=[...r.data].map((o,c)=>{const l=this._def.items[c]||this._def.rest;return l?l._parse(new St(r,o,r.path,c)):null}).filter(o=>!!o);return r.common.async?Promise.all(i).then(o=>Be.mergeArray(t,o)):Be.mergeArray(t,i)}get items(){return this._def.items}rest(e){return new Rt({...this._def,rest:e})}}Rt.create=(n,e)=>{if(!Array.isArray(n))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Rt({items:n,typeName:z.ZodTuple,rest:null,...Q(e)})};class Bs extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return M(r,{code:D.invalid_type,expected:L.object,received:r.parsedType}),G;const s=[],i=this._def.keyType,o=this._def.valueType;for(const c in r.data)s.push({key:i._parse(new St(r,c,r.path,c)),value:o._parse(new St(r,r.data[c],r.path,c)),alwaysSet:c in r.data});return r.common.async?Be.mergeObjectAsync(t,s):Be.mergeObjectSync(t,s)}get element(){return this._def.valueType}static create(e,t,r){return t instanceof X?new Bs({keyType:e,valueType:t,typeName:z.ZodRecord,...Q(r)}):new Bs({keyType:ht.create(),valueType:e,typeName:z.ZodRecord,...Q(t)})}}class xa extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.map)return M(r,{code:D.invalid_type,expected:L.map,received:r.parsedType}),G;const s=this._def.keyType,i=this._def.valueType,o=[...r.data.entries()].map(([c,l],h)=>({key:s._parse(new St(r,c,r.path,[h,"key"])),value:i._parse(new St(r,l,r.path,[h,"value"]))}));if(r.common.async){const c=new Map;return Promise.resolve().then(async()=>{for(const l of o){const h=await l.key,m=await l.value;if(h.status==="aborted"||m.status==="aborted")return G;(h.status==="dirty"||m.status==="dirty")&&t.dirty(),c.set(h.value,m.value)}return{status:t.value,value:c}})}else{const c=new Map;for(const l of o){const h=l.key,m=l.value;if(h.status==="aborted"||m.status==="aborted")return G;(h.status==="dirty"||m.status==="dirty")&&t.dirty(),c.set(h.value,m.value)}return{status:t.value,value:c}}}}xa.create=(n,e,t)=>new xa({valueType:e,keyType:n,typeName:z.ZodMap,...Q(t)});class Hn extends X{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.set)return M(r,{code:D.invalid_type,expected:L.set,received:r.parsedType}),G;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(M(r,{code:D.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),t.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(M(r,{code:D.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),t.dirty());const i=this._def.valueType;function o(l){const h=new Set;for(const m of l){if(m.status==="aborted")return G;m.status==="dirty"&&t.dirty(),h.add(m.value)}return{status:t.value,value:h}}const c=[...r.data.values()].map((l,h)=>i._parse(new St(r,l,r.path,h)));return r.common.async?Promise.all(c).then(l=>o(l)):o(c)}min(e,t){return new Hn({...this._def,minSize:{value:e,message:q.toString(t)}})}max(e,t){return new Hn({...this._def,maxSize:{value:e,message:q.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}Hn.create=(n,e)=>new Hn({valueType:n,minSize:null,maxSize:null,typeName:z.ZodSet,...Q(e)});class yr extends X{constructor(){super(...arguments),this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==L.function)return M(t,{code:D.invalid_type,expected:L.function,received:t.parsedType}),G;function r(c,l){return Ea({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,wa(),kr].filter(h=>!!h),issueData:{code:D.invalid_arguments,argumentsError:l}})}function s(c,l){return Ea({data:c,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,wa(),kr].filter(h=>!!h),issueData:{code:D.invalid_return_type,returnTypeError:l}})}const i={errorMap:t.common.contextualErrorMap},o=t.data;if(this._def.returns instanceof Pr){const c=this;return ze(async function(...l){const h=new Je([]),m=await c._def.args.parseAsync(l,i).catch(E=>{throw h.addIssue(r(l,E)),h}),g=await Reflect.apply(o,this,m);return await c._def.returns._def.type.parseAsync(g,i).catch(E=>{throw h.addIssue(s(g,E)),h})})}else{const c=this;return ze(function(...l){const h=c._def.args.safeParse(l,i);if(!h.success)throw new Je([r(l,h.error)]);const m=Reflect.apply(o,this,h.data),g=c._def.returns.safeParse(m,i);if(!g.success)throw new Je([s(m,g.error)]);return g.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new yr({...this._def,args:Rt.create(e).rest(On.create())})}returns(e){return new yr({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,t,r){return new yr({args:e||Rt.create([]).rest(On.create()),returns:t||On.create(),typeName:z.ZodFunction,...Q(r)})}}class $s extends X{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}}$s.create=(n,e)=>new $s({getter:n,typeName:z.ZodLazy,...Q(e)});class qs extends X{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);return M(t,{received:t.data,code:D.invalid_literal,expected:this._def.value}),G}return{status:"valid",value:e.data}}get value(){return this._def.value}}qs.create=(n,e)=>new qs({value:n,typeName:z.ZodLiteral,...Q(e)});function ag(n,e){return new mn({values:n,typeName:z.ZodEnum,...Q(e)})}class mn extends X{constructor(){super(...arguments),hs.set(this,void 0)}_parse(e){if(typeof e.data!="string"){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{expected:re.joinValues(r),received:t.parsedType,code:D.invalid_type}),G}if(Ta(this,hs)||ng(this,hs,new Set(this._def.values)),!Ta(this,hs).has(e.data)){const t=this._getOrReturnCtx(e),r=this._def.values;return M(t,{received:t.data,code:D.invalid_enum_value,options:r}),G}return ze(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return mn.create(e,{...this._def,...t})}exclude(e,t=this._def){return mn.create(this.options.filter(r=>!e.includes(r)),{...this._def,...t})}}hs=new WeakMap;mn.create=ag;class Ws extends X{constructor(){super(...arguments),fs.set(this,void 0)}_parse(e){const t=re.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==L.string&&r.parsedType!==L.number){const s=re.objectValues(t);return M(r,{expected:re.joinValues(s),received:r.parsedType,code:D.invalid_type}),G}if(Ta(this,fs)||ng(this,fs,new Set(re.getValidEnumValues(this._def.values))),!Ta(this,fs).has(e.data)){const s=re.objectValues(t);return M(r,{received:r.data,code:D.invalid_enum_value,options:s}),G}return ze(e.data)}get enum(){return this._def.values}}fs=new WeakMap;Ws.create=(n,e)=>new Ws({values:n,typeName:z.ZodNativeEnum,...Q(e)});class Pr extends X{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==L.promise&&t.common.async===!1)return M(t,{code:D.invalid_type,expected:L.promise,received:t.parsedType}),G;const r=t.parsedType===L.promise?t.data:Promise.resolve(t.data);return ze(r.then(s=>this._def.type.parseAsync(s,{path:t.path,errorMap:t.common.contextualErrorMap})))}}Pr.create=(n,e)=>new Pr({type:n,typeName:z.ZodPromise,...Q(e)});class _t extends X{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===z.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:r}=this._processInputParams(e),s=this._def.effect||null,i={addIssue:o=>{M(r,o),o.fatal?t.abort():t.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),s.type==="preprocess"){const o=s.transform(r.data,i);if(r.common.async)return Promise.resolve(o).then(async c=>{if(t.value==="aborted")return G;const l=await this._def.schema._parseAsync({data:c,path:r.path,parent:r});return l.status==="aborted"?G:l.status==="dirty"||t.value==="dirty"?ur(l.value):l});{if(t.value==="aborted")return G;const c=this._def.schema._parseSync({data:o,path:r.path,parent:r});return c.status==="aborted"?G:c.status==="dirty"||t.value==="dirty"?ur(c.value):c}}if(s.type==="refinement"){const o=c=>{const l=s.refinement(c,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return c};if(r.common.async===!1){const c=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return c.status==="aborted"?G:(c.status==="dirty"&&t.dirty(),o(c.value),{status:t.value,value:c.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(c=>c.status==="aborted"?G:(c.status==="dirty"&&t.dirty(),o(c.value).then(()=>({status:t.value,value:c.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Wn(o))return o;const c=s.transform(o.value,i);if(c instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:c}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Wn(o)?Promise.resolve(s.transform(o.value,i)).then(c=>({status:t.value,value:c})):o);re.assertNever(s)}}_t.create=(n,e,t)=>new _t({schema:n,typeName:z.ZodEffects,effect:e,...Q(t)});_t.createWithPreprocess=(n,e,t)=>new _t({schema:e,effect:{type:"preprocess",transform:n},typeName:z.ZodEffects,...Q(t)});class It extends X{_parse(e){return this._getType(e)===L.undefined?ze(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}It.create=(n,e)=>new It({innerType:n,typeName:z.ZodOptional,...Q(e)});class pn extends X{_parse(e){return this._getType(e)===L.null?ze(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}pn.create=(n,e)=>new pn({innerType:n,typeName:z.ZodNullable,...Q(e)});class zs extends X{_parse(e){const{ctx:t}=this._processInputParams(e);let r=t.data;return t.parsedType===L.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}zs.create=(n,e)=>new zs({innerType:n,typeName:z.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...Q(e)});class Hs extends X{_parse(e){const{ctx:t}=this._processInputParams(e),r={...t,common:{...t.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return js(s)?s.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Je(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new Je(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Hs.create=(n,e)=>new Hs({innerType:n,typeName:z.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...Q(e)});class Aa extends X{_parse(e){if(this._getType(e)!==L.nan){const r=this._getOrReturnCtx(e);return M(r,{code:D.invalid_type,expected:L.nan,received:r.parsedType}),G}return{status:"valid",value:e.data}}}Aa.create=n=>new Aa({typeName:z.ZodNaN,...Q(n)});const VS=Symbol("zod_brand");class $l extends X{_parse(e){const{ctx:t}=this._processInputParams(e),r=t.data;return this._def.type._parse({data:r,path:t.path,parent:t})}unwrap(){return this._def.type}}class ci extends X{_parse(e){const{status:t,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{const i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?G:i.status==="dirty"?(t.dirty(),ur(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?G:s.status==="dirty"?(t.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(e,t){return new ci({in:e,out:t,typeName:z.ZodPipeline})}}class Gs extends X{_parse(e){const t=this._def.innerType._parse(e),r=s=>(Wn(s)&&(s.value=Object.freeze(s.value)),s);return js(t)?t.then(s=>r(s)):r(t)}unwrap(){return this._def.innerType}}Gs.create=(n,e)=>new Gs({innerType:n,typeName:z.ZodReadonly,...Q(e)});function og(n,e={},t){return n?Nr.create().superRefine((r,s)=>{var i,o;if(!n(r)){const c=typeof e=="function"?e(r):typeof e=="string"?{message:e}:e,l=(o=(i=c.fatal)!==null&&i!==void 0?i:t)!==null&&o!==void 0?o:!0,h=typeof c=="string"?{message:c}:c;s.addIssue({code:"custom",...h,fatal:l})}}):Nr.create()}const MS={object:fe.lazycreate};var z;(function(n){n.ZodString="ZodString",n.ZodNumber="ZodNumber",n.ZodNaN="ZodNaN",n.ZodBigInt="ZodBigInt",n.ZodBoolean="ZodBoolean",n.ZodDate="ZodDate",n.ZodSymbol="ZodSymbol",n.ZodUndefined="ZodUndefined",n.ZodNull="ZodNull",n.ZodAny="ZodAny",n.ZodUnknown="ZodUnknown",n.ZodNever="ZodNever",n.ZodVoid="ZodVoid",n.ZodArray="ZodArray",n.ZodObject="ZodObject",n.ZodUnion="ZodUnion",n.ZodDiscriminatedUnion="ZodDiscriminatedUnion",n.ZodIntersection="ZodIntersection",n.ZodTuple="ZodTuple",n.ZodRecord="ZodRecord",n.ZodMap="ZodMap",n.ZodSet="ZodSet",n.ZodFunction="ZodFunction",n.ZodLazy="ZodLazy",n.ZodLiteral="ZodLiteral",n.ZodEnum="ZodEnum",n.ZodEffects="ZodEffects",n.ZodNativeEnum="ZodNativeEnum",n.ZodOptional="ZodOptional",n.ZodNullable="ZodNullable",n.ZodDefault="ZodDefault",n.ZodCatch="ZodCatch",n.ZodPromise="ZodPromise",n.ZodBranded="ZodBranded",n.ZodPipeline="ZodPipeline",n.ZodReadonly="ZodReadonly"})(z||(z={}));const LS=(n,e={message:`Input not instance of ${n.name}`})=>og(t=>t instanceof n,e),cg=ht.create,lg=hn.create,FS=Aa.create,US=fn.create,ug=Vs.create,BS=zn.create,$S=ba.create,qS=Ms.create,WS=Ls.create,zS=Nr.create,HS=On.create,GS=zt.create,KS=Ia.create,ZS=ft.create,YS=fe.create,QS=fe.strictCreate,JS=Fs.create,XS=oo.create,eR=Us.create,tR=Rt.create,nR=Bs.create,rR=xa.create,sR=Hn.create,iR=yr.create,aR=$s.create,oR=qs.create,cR=mn.create,lR=Ws.create,uR=Pr.create,Lh=_t.create,dR=It.create,hR=pn.create,fR=_t.createWithPreprocess,mR=ci.create,pR=()=>cg().optional(),gR=()=>lg().optional(),yR=()=>ug().optional(),_R={string:n=>ht.create({...n,coerce:!0}),number:n=>hn.create({...n,coerce:!0}),boolean:n=>Vs.create({...n,coerce:!0}),bigint:n=>fn.create({...n,coerce:!0}),date:n=>zn.create({...n,coerce:!0})},vR=G;var ql=Object.freeze({__proto__:null,defaultErrorMap:kr,setErrorMap:fS,getErrorMap:wa,makeIssue:Ea,EMPTY_PATH:mS,addIssueToContext:M,ParseStatus:Be,INVALID:G,DIRTY:ur,OK:ze,isAborted:Lc,isDirty:Fc,isValid:Wn,isAsync:js,get util(){return re},get objectUtil(){return Mc},ZodParsedType:L,getParsedType:Dt,ZodType:X,datetimeRegex:ig,ZodString:ht,ZodNumber:hn,ZodBigInt:fn,ZodBoolean:Vs,ZodDate:zn,ZodSymbol:ba,ZodUndefined:Ms,ZodNull:Ls,ZodAny:Nr,ZodUnknown:On,ZodNever:zt,ZodVoid:Ia,ZodArray:ft,ZodObject:fe,ZodUnion:Fs,ZodDiscriminatedUnion:oo,ZodIntersection:Us,ZodTuple:Rt,ZodRecord:Bs,ZodMap:xa,ZodSet:Hn,ZodFunction:yr,ZodLazy:$s,ZodLiteral:qs,ZodEnum:mn,ZodNativeEnum:Ws,ZodPromise:Pr,ZodEffects:_t,ZodTransformer:_t,ZodOptional:It,ZodNullable:pn,ZodDefault:zs,ZodCatch:Hs,ZodNaN:Aa,BRAND:VS,ZodBranded:$l,ZodPipeline:ci,ZodReadonly:Gs,custom:og,Schema:X,ZodSchema:X,late:MS,get ZodFirstPartyTypeKind(){return z},coerce:_R,any:zS,array:ZS,bigint:US,boolean:ug,date:BS,discriminatedUnion:XS,effect:Lh,enum:cR,function:iR,instanceof:LS,intersection:eR,lazy:aR,literal:oR,map:rR,nan:FS,nativeEnum:lR,never:GS,null:WS,nullable:hR,number:lg,object:YS,oboolean:yR,onumber:gR,optional:dR,ostring:pR,pipeline:mR,preprocess:fR,promise:uR,record:nR,set:sR,strictObject:QS,string:cg,symbol:$S,transformer:Lh,tuple:tR,undefined:qS,union:JS,unknown:HS,void:KS,NEVER:vR,ZodIssueCode:D,quotelessJson:hS,ZodError:Je});const wR=ql.string().email("Invalid email address"),ER=ql.string().min(8,"Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter, one lowercase letter, and one number"),TR=ql.string().regex(/^\+?[1-9]\d{1,14}$/,"Invalid phone number"),Bc=n=>{try{return wR.parse(n),!0}catch{return!1}},$c=n=>{try{return ER.parse(n),!0}catch{return!1}},bR=n=>{try{return TR.parse(n),!0}catch{return!1}};function IR(){const n=gn(),e=Ie(g=>g.register),[t,r]=R.useState({name:"",email:"",phone:"",password:"",confirmPassword:""}),[s,i]=R.useState({}),[o,c]=R.useState(!1),l=()=>{const g={};return t.name.trim()||(g.name="Name is required"),Bc(t.email)||(g.email="Invalid email address"),bR(t.phone)||(g.phone="Invalid phone number"),$c(t.password)||(g.password="Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number"),t.password!==t.confirmPassword&&(g.confirmPassword="Passwords do not match"),i(g),Object.keys(g).length===0},h=async g=>{if(g.preventDefault(),!!l()){c(!0);try{await e({name:t.name,email:t.email,phone:t.phone,password:t.password}),n("/")}catch{i({submit:"Registration failed. Please try again."})}finally{c(!1)}}},m=g=>{const{name:w,value:E}=g.target;r(k=>({...k,[w]:E})),s[w]&&i(k=>({...k,[w]:""}))};return d.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4",children:d.jsxs("div",{className:"max-w-md w-full space-y-8",children:[d.jsx("div",{children:d.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"Create your account"})}),d.jsxs("form",{className:"mt-8 space-y-6",onSubmit:h,children:[s.submit&&d.jsx("div",{className:"text-red-600 text-sm text-center",children:s.submit}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700",children:"Full Name"}),d.jsx("input",{id:"name",name:"name",type:"text",required:!0,className:"input mt-1",value:t.name,onChange:m}),s.name&&d.jsx("p",{className:"text-red-600 text-sm mt-1",children:s.name})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700",children:"Email address"}),d.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"input mt-1",value:t.email,onChange:m}),s.email&&d.jsx("p",{className:"text-red-600 text-sm mt-1",children:s.email})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700",children:"Phone number"}),d.jsx("input",{id:"phone",name:"phone",type:"tel",required:!0,className:"input mt-1",value:t.phone,onChange:m}),s.phone&&d.jsx("p",{className:"text-red-600 text-sm mt-1",children:s.phone})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700",children:"Password"}),d.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"input mt-1",value:t.password,onChange:m}),s.password&&d.jsx("p",{className:"text-red-600 text-sm mt-1",children:s.password})]}),d.jsxs("div",{children:[d.jsx("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700",children:"Confirm Password"}),d.jsx("input",{id:"confirmPassword",name:"confirmPassword",type:"password",required:!0,className:"input mt-1",value:t.confirmPassword,onChange:m}),s.confirmPassword&&d.jsx("p",{className:"text-red-600 text-sm mt-1",children:s.confirmPassword})]})]}),d.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:o,children:o?"Creating account...":"Create account"})]}),d.jsx("div",{className:"text-center",children:d.jsx(ke,{to:"/login",className:"text-primary-600 hover:text-primary-500",children:"Already have an account? Sign in"})})]})})}function xR(){const{user:n,updateProfile:e,isLoading:t}=Ie(),[r,s]=R.useState(!1),[i,o]=R.useState({name:(n==null?void 0:n.name)||"",phone:(n==null?void 0:n.phone)||""}),[c,l]=R.useState(null);if(!n)return null;const h=async m=>{m.preventDefault(),l(null);try{await e({name:i.name,phone:i.phone}),s(!1)}catch(g){l(g instanceof Error?g.message:"Failed to update profile")}};return d.jsx("div",{className:"max-w-3xl mx-auto",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h1",{className:"text-2xl font-bold",children:"Profile"}),!r&&d.jsx("button",{onClick:()=>s(!0),className:"btn btn-primary",children:"Edit Profile"})]}),c&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md mb-6",children:c}),r?d.jsxs("form",{onSubmit:h,className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),d.jsx("input",{type:"text",className:"input",value:i.name,onChange:m=>o(g=>({...g,name:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),d.jsx("input",{type:"email",className:"input bg-gray-50",value:n.email,disabled:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone"}),d.jsx("input",{type:"tel",className:"input",value:i.phone,onChange:m=>o(g=>({...g,phone:m.target.value})),required:!0})]}),d.jsxs("div",{className:"flex gap-4",children:[d.jsx("button",{type:"submit",className:"btn btn-primary",disabled:t,children:t?d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(tt,{}),d.jsx("span",{children:"Saving..."})]}):"Save Changes"}),d.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{s(!1),o({name:n.name,phone:n.phone})},children:"Cancel"})]})]}):d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Name"}),d.jsx("p",{className:"text-lg",children:n.name})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Email"}),d.jsx("p",{className:"text-lg",children:n.email})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Phone"}),d.jsx("p",{className:"text-lg",children:n.phone})]})]})]})})}function AR(){return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"All Services"}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:oi.map(n=>d.jsx(ke,{to:`/services/${n.id}`,className:"group bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-all duration-200",children:d.jsxs("div",{className:"flex flex-col items-center text-center",children:[d.jsx("span",{className:"text-6xl mb-6 transition-transform duration-200 group-hover:scale-110",children:n.icon}),d.jsx("h3",{className:"text-xl font-bold text-gray-900 mb-3",children:n.title}),d.jsx("p",{className:"text-gray-600",children:n.description})]})},n.id))})]})}function SR(){return d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Contact Us"}),d.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 mb-8",children:d.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[d.jsxs("div",{children:[d.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Get in Touch"}),d.jsx("p",{className:"text-gray-600 mb-6",children:"Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[d.jsx(Wh,{className:"w-5 h-5"}),d.jsx("span",{children:"+1 (555) 123-4567"})]}),d.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[d.jsx(vy,{className:"w-5 h-5"}),d.jsx("span",{children:"support@servicepro.com"})]}),d.jsxs("div",{className:"flex items-center gap-3 text-gray-600",children:[d.jsx(Sy,{className:"w-5 h-5"}),d.jsx("span",{children:"123 Service Street, City, Country"})]})]})]}),d.jsxs("form",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Name"}),d.jsx("input",{type:"text",className:"input"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),d.jsx("input",{type:"email",className:"input"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),d.jsx("textarea",{className:"input min-h-[120px]"})]}),d.jsx("button",{type:"submit",className:"btn btn-primary w-full",children:"Send Message"})]})]})})]})})}function RR(){const n=[{icon:Ny,title:"Trusted Professionals",description:"All our service providers are thoroughly vetted and background checked."},{icon:Vy,title:"Customer Satisfaction",description:"We prioritize your satisfaction with a 100% satisfaction guarantee."},{icon:Cy,title:"Quality Service",description:"Get top-quality service from experienced professionals."}];return d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"About ServicePro"}),d.jsx("div",{className:"bg-white rounded-lg shadow-md p-8 mb-8",children:d.jsxs("div",{className:"prose max-w-none",children:[d.jsx("p",{className:"text-gray-600 mb-6",children:"ServicePro is your trusted platform for finding and booking professional services. We connect customers with skilled professionals for a wide range of services, from home maintenance to personal care."}),d.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 my-12",children:n.map((e,t)=>d.jsxs("div",{className:"text-center",children:[d.jsx(e.icon,{className:"w-12 h-12 mx-auto text-primary-600 mb-4"}),d.jsx("h3",{className:"text-lg font-semibold mb-2",children:e.title}),d.jsx("p",{className:"text-gray-600",children:e.description})]},t))}),d.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Our Mission"}),d.jsx("p",{className:"text-gray-600 mb-6",children:"Our mission is to revolutionize the way people access professional services by providing a seamless, reliable, and convenient platform that connects customers with trusted service providers."}),d.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Why Choose Us?"}),d.jsxs("ul",{className:"list-disc list-inside text-gray-600 space-y-2 mb-6",children:[d.jsx("li",{children:"Verified professionals with proven expertise"}),d.jsx("li",{children:"Secure and convenient booking system"}),d.jsx("li",{children:"Transparent pricing with no hidden fees"}),d.jsx("li",{children:"24/7 customer support"}),d.jsx("li",{children:"Satisfaction guaranteed"})]})]})})]})})}const kR=[{id:"1",name:"Jane Smith",categoryId:"beauty",description:"Professional makeup artist with 5 years of experience",rating:4.8,reviews:124,price:50,avatar:"https://i.pravatar.cc/150?img=1",services:[{id:"1",name:"Basic Makeup",description:"Natural looking makeup for everyday wear",price:50,duration:60},{id:"2",name:"Bridal Makeup",description:"Complete bridal makeup package",price:150,duration:120}]},{id:"2",name:"John Doe",categoryId:"home",description:"Expert plumber with 10 years of experience",rating:4.9,reviews:256,price:80,avatar:"https://i.pravatar.cc/150?img=2",services:[{id:"3",name:"Basic Plumbing",description:"Fix common plumbing issues",price:80,duration:60},{id:"4",name:"Complete Inspection",description:"Thorough inspection of plumbing system",price:120,duration:90}]}];function NR(){const n=kR.slice(0,3);return d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"My Favorites"}),n.length===0?d.jsxs("div",{className:"text-center py-12",children:[d.jsx(Ey,{className:"w-16 h-16 mx-auto text-gray-400 mb-4"}),d.jsx("p",{className:"text-gray-600",children:"You haven't added any favorites yet."})]}):d.jsx("div",{className:"grid gap-6",children:n.map(e=>d.jsxs(ke,{to:`/service/${e.id}`,className:"bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("img",{src:e.avatar,alt:e.name,className:"w-16 h-16 rounded-full"}),d.jsxs("div",{children:[d.jsx("h2",{className:"text-xl font-semibold",children:e.name}),d.jsxs("div",{className:"flex items-center gap-1 text-yellow-500",children:[d.jsx("span",{children:"⭐"}),d.jsxs("span",{className:"text-gray-600",children:[e.rating," (",e.reviews," reviews)"]})]})]}),d.jsx("div",{className:"ml-auto",children:d.jsxs("span",{className:"text-xl font-semibold text-primary-600",children:["$",e.price,"/hr"]})})]}),d.jsx("p",{className:"mt-4 text-gray-600",children:e.description})]},e.id))})]})}function PR(){const{user:n}=Ie(),[e,t]=R.useState({email:!0,push:!0,sms:!1});return d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Settings"}),d.jsxs("div",{className:"bg-white rounded-lg shadow-md divide-y",children:[d.jsxs("div",{className:"p-6",children:[d.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Account Settings"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),d.jsx("input",{type:"email",className:"input",value:n==null?void 0:n.email,disabled:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone"}),d.jsx("input",{type:"tel",className:"input",value:n==null?void 0:n.phone,disabled:!0})]})]})]}),d.jsxs("div",{className:"p-6",children:[d.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Notification Settings"}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"Email Notifications"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Receive booking updates via email"})]}),d.jsx("button",{onClick:()=>t(r=>({...r,email:!r.email})),className:`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${e.email?"bg-primary-600":"bg-gray-200"}
                  `,children:d.jsx("span",{className:`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${e.email?"translate-x-5":"translate-x-0"}
                    `})})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"Push Notifications"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Receive push notifications"})]}),d.jsx("button",{onClick:()=>t(r=>({...r,push:!r.push})),className:`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${e.push?"bg-primary-600":"bg-gray-200"}
                  `,children:d.jsx("span",{className:`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${e.push?"translate-x-5":"translate-x-0"}
                    `})})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-medium",children:"SMS Notifications"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Receive SMS updates"})]}),d.jsx("button",{onClick:()=>t(r=>({...r,sms:!r.sms})),className:`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full 
                    border-2 border-transparent transition-colors duration-200 ease-in-out 
                    ${e.sms?"bg-primary-600":"bg-gray-200"}
                  `,children:d.jsx("span",{className:`
                      pointer-events-none inline-block h-5 w-5 transform rounded-full 
                      bg-white shadow ring-0 transition duration-200 ease-in-out
                      ${e.sms?"translate-x-5":"translate-x-0"}
                    `})})]})]})]})]})]})})}function CR(){const n=gn(),{user:e,createProfile:t,partnerProfile:r,isLoading:s,error:i}=Ie();R.useEffect(()=>{if(!e){n("/login");return}r&&n("/partner/dashboard")},[e,r,n]);const o=async c=>{c.preventDefault();const l=new FormData(c.currentTarget);try{await t({businessName:l.get("businessName"),description:l.get("description"),category:l.get("category"),address:l.get("address"),phone:l.get("phone"),email:(e==null?void 0:e.email)||""}),n("/partner/dashboard")}catch(h){console.error("Failed to create partner profile:",h)}};return s?d.jsx("div",{className:"flex justify-center items-center min-h-screen",children:d.jsx(tt,{})}):d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsx("div",{className:"max-w-2xl mx-auto",children:d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-8",children:[d.jsx("h1",{className:"text-3xl font-bold mb-8",children:"Become a Partner"}),i&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",children:i}),d.jsxs("form",{onSubmit:o,className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Business Name"}),d.jsx("input",{type:"text",name:"businessName",className:"input",placeholder:"Enter your business name",required:!0,minLength:3})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Description"}),d.jsx("textarea",{name:"description",className:"input",rows:4,placeholder:"Describe your business and services",required:!0,minLength:20})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Primary Service Category"}),d.jsxs("select",{name:"category",className:"input",required:!0,children:[d.jsx("option",{value:"",children:"Select a category"}),oi.map(c=>d.jsx("option",{value:c.id,children:c.title},c.id))]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Business Address"}),d.jsx("textarea",{name:"address",className:"input",rows:2,placeholder:"Enter your business address",required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Phone Number"}),d.jsx("input",{type:"tel",name:"phone",className:"input",placeholder:"+1 (555) 123-4567",required:!0,pattern:"^\\+?[1-9]\\d{1,14}$"}),d.jsx("p",{className:"text-sm text-gray-500 mt-1",children:"Enter a valid phone number with country code (e.g., +1 for US)"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),d.jsx("input",{type:"email",value:e==null?void 0:e.email,className:"input bg-gray-50",disabled:!0})]}),d.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg mb-6",children:[d.jsx("h3",{className:"font-medium text-blue-800 mb-2",children:"What happens next?"}),d.jsxs("ul",{className:"list-disc list-inside text-sm text-blue-700 space-y-1",children:[d.jsx("li",{children:"Your profile will be reviewed by our team"}),d.jsx("li",{children:"You can start adding your services immediately"}),d.jsx("li",{children:"Once verified, your services will be visible to customers"}),d.jsx("li",{children:"You'll receive notifications for new bookings"})]})]}),d.jsx("button",{type:"submit",className:"btn btn-primary w-full",disabled:s,children:s?d.jsxs("div",{className:"flex items-center justify-center gap-2",children:[d.jsx(tt,{}),d.jsx("span",{children:"Creating Profile..."})]}):"Create Partner Profile"})]})]})})})}function dg({isOpen:n,onClose:e,title:t,children:r}){return d.jsx(Li,{appear:!0,show:n,as:R.Fragment,children:d.jsxs(Oo,{as:"div",className:"relative z-50",onClose:e,children:[d.jsx(Li.Child,{as:R.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:d.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50"})}),d.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:d.jsx("div",{className:"flex min-h-full items-center justify-center p-4",children:d.jsx(Li.Child,{as:R.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:d.jsxs(Oo.Panel,{className:"relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx(Oo.Title,{className:"text-xl font-bold",children:t}),d.jsx("button",{onClick:e,className:"text-gray-400 hover:text-gray-500",children:d.jsx(zh,{className:"h-6 w-6"})})]}),r]})})})})]})})}function OR({isOpen:n,onClose:e}){const{addService:t,partnerProfile:r,isLoading:s}=Ie(),[i,o]=R.useState(null),[c,l]=R.useState({name:"",description:"",price:"",duration:"",category:""}),h=async m=>{if(m.preventDefault(),o(null),!r){o("Partner profile not found");return}try{await t(r.id,{...c,price:parseFloat(c.price),duration:parseInt(c.duration)}),e(),l({name:"",description:"",price:"",duration:"",category:""})}catch(g){o(g instanceof Error?g.message:"Failed to add service")}};return d.jsxs(dg,{isOpen:n,onClose:e,title:"Add New Service",children:[i&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md mb-6",children:i}),d.jsxs("form",{onSubmit:h,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Service Name"}),d.jsx("input",{type:"text",className:"input mt-1",value:c.name,onChange:m=>l(g=>({...g,name:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),d.jsx("textarea",{className:"input mt-1",rows:3,value:c.description,onChange:m=>l(g=>({...g,description:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Category"}),d.jsxs("select",{className:"input mt-1",value:c.category,onChange:m=>l(g=>({...g,category:m.target.value})),required:!0,children:[d.jsx("option",{value:"",children:"Select a category"}),oi.map(m=>d.jsx("option",{value:m.id,children:m.title},m.id))]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Price ($)"}),d.jsx("input",{type:"number",min:"0",step:"0.01",className:"input mt-1",value:c.price,onChange:m=>l(g=>({...g,price:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Duration (min)"}),d.jsx("input",{type:"number",min:"15",step:"15",className:"input mt-1",value:c.duration,onChange:m=>l(g=>({...g,duration:m.target.value})),required:!0})]})]}),d.jsxs("div",{className:"flex gap-4 mt-6",children:[d.jsx("button",{type:"submit",className:"btn btn-primary flex-1",disabled:s,children:s?d.jsx(tt,{}):"Add Service"}),d.jsx("button",{type:"button",className:"btn btn-secondary flex-1",onClick:e,children:"Cancel"})]})]})]})}function DR({isOpen:n,onClose:e,service:t}){const{updateService:r,isLoading:s}=Ie(),[i,o]=R.useState(null),[c,l]=R.useState({name:t.name,description:t.description,price:t.price.toString(),duration:t.duration.toString(),category:t.category}),h=async m=>{m.preventDefault(),o(null);try{await r(t.id,{...c,price:parseFloat(c.price),duration:parseInt(c.duration)}),e()}catch(g){o(g instanceof Error?g.message:"Failed to update service")}};return d.jsxs(dg,{isOpen:n,onClose:e,title:"Edit Service",children:[i&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-md mb-6",children:i}),d.jsxs("form",{onSubmit:h,className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Service Name"}),d.jsx("input",{type:"text",className:"input mt-1",value:c.name,onChange:m=>l(g=>({...g,name:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Description"}),d.jsx("textarea",{className:"input mt-1",rows:3,value:c.description,onChange:m=>l(g=>({...g,description:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Category"}),d.jsxs("select",{className:"input mt-1",value:c.category,onChange:m=>l(g=>({...g,category:m.target.value})),required:!0,children:[d.jsx("option",{value:"",children:"Select a category"}),oi.map(m=>d.jsx("option",{value:m.id,children:m.title},m.id))]})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Price ($)"}),d.jsx("input",{type:"number",min:"0",step:"0.01",className:"input mt-1",value:c.price,onChange:m=>l(g=>({...g,price:m.target.value})),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"Duration (min)"}),d.jsx("input",{type:"number",min:"15",step:"15",className:"input mt-1",value:c.duration,onChange:m=>l(g=>({...g,duration:m.target.value})),required:!0})]})]}),d.jsxs("div",{className:"flex gap-4 mt-6",children:[d.jsx("button",{type:"submit",className:"btn btn-primary flex-1",disabled:s,children:s?d.jsx(tt,{}):"Save Changes"}),d.jsx("button",{type:"button",className:"btn btn-secondary flex-1",onClick:e,children:"Cancel"})]})]})]})}function jR({profile:n,onAddService:e}){return d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6 mb-6",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h1",{className:"text-2xl font-bold",children:"Partner Dashboard"}),d.jsx("button",{onClick:e,className:"btn btn-primary",children:"Add Service"})]}),d.jsxs("div",{className:"grid gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Business Name"}),d.jsx("p",{className:"text-lg",children:n.businessName})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Description"}),d.jsx("p",{className:"text-lg",children:n.description})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm font-medium text-gray-600",children:"Status"}),d.jsx("p",{className:`inline-block px-2 py-1 rounded-full text-sm ${n.isVerified?"bg-green-100 text-green-800":"bg-yellow-100 text-yellow-800"}`,children:n.isVerified?"Verified":"Pending Verification"})]})]})]})}const VR=R.memo(function({service:e,onEdit:t}){const{deleteService:r}=Ie(),s=async()=>{if(window.confirm("Are you sure you want to delete this service?"))try{await r(e.id)}catch(i){console.error("Failed to delete service:",i)}};return d.jsx("div",{className:"border rounded-lg p-4",children:d.jsxs("div",{className:"flex justify-between items-start",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold",children:e.name}),d.jsx("p",{className:"text-sm text-gray-600",children:e.description}),d.jsxs("p",{className:"text-sm text-gray-500 mt-1",children:["Category: ",e.category]})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("p",{className:"text-lg font-semibold text-primary-600",children:["$",e.price]}),d.jsxs("p",{className:"text-sm text-gray-500",children:[e.duration," min"]}),d.jsxs("div",{className:"flex gap-2 mt-2",children:[d.jsx("button",{onClick:t,className:"text-primary-600 hover:text-primary-700",children:"Edit"}),d.jsx("button",{onClick:s,className:"text-red-600 hover:text-red-700",children:"Delete"})]})]})]})})}),MR=R.memo(function({onEdit:e}){const{services:t,isLoading:r}=Ie();return r?d.jsx("div",{className:"flex justify-center py-8",children:d.jsx(tt,{})}):d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsx("h2",{className:"text-xl font-semibold mb-4",children:"Services"}),t.length===0?d.jsx("p",{className:"text-gray-600",children:"No services added yet."}):d.jsx("div",{className:"space-y-4",children:t.map(s=>d.jsx(VR,{service:s,onEdit:()=>e(s)},s.id))})]})});function LR(){const n=gn(),{user:e,partnerProfile:t,loadProfile:r,loadPartnerServices:s,isLoading:i,error:o}=Ie(),[c,l]=R.useState(null),[h,m]=R.useState(!1),[g,w]=R.useState(!1),[E,k]=R.useState(null),[N,C]=R.useState(!1),F=R.useCallback(async()=>{if(!(!e||N))try{await r(),t&&await s(),C(!0)}catch(j){l(j instanceof Error?j.message:"Failed to load profile")}},[e,r,s,t,N]);return R.useEffect(()=>{if(!e){n("/login");return}if(!t&&N){n("/partner/register");return}F()},[e,t,n,F,N]),!N||i?d.jsx("div",{className:"flex justify-center items-center min-h-[400px]",children:d.jsx(tt,{})}):t?d.jsxs("div",{className:"container mx-auto px-4 py-8",children:[d.jsxs("div",{className:"max-w-3xl mx-auto",children:[(c||o)&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",children:c||o}),d.jsx(jR,{profile:t,onAddService:()=>m(!0)}),d.jsx(MR,{onEdit:j=>{k(j),w(!0)}})]}),d.jsx(OR,{isOpen:h,onClose:()=>m(!1)}),E&&d.jsx(DR,{isOpen:g,onClose:()=>{w(!1),k(null)},service:E})]}):null}function FR(){const n=gn(),{user:e,partnerProfile:t,loadPartnerBookings:r,acceptBooking:s,rejectBooking:i,completeBooking:o,bookings:c,isLoading:l}=Ie(),[h,m]=R.useState(null),[g,w]=R.useState("all");R.useEffect(()=>{if(!e){n("/login");return}if(!t){n("/partner/register");return}r(t.id).catch(j=>{m(j instanceof Error?j.message:"Failed to load orders")})},[e,t,n,r]);const E=async j=>{try{await s(j)}catch($){m($ instanceof Error?$.message:"Failed to accept booking")}},k=async j=>{if(window.confirm("Are you sure you want to reject this booking?"))try{await i(j)}catch($){m($ instanceof Error?$.message:"Failed to reject booking")}},N=async j=>{try{await o(j)}catch($){m($ instanceof Error?$.message:"Failed to complete booking")}},C=j=>{switch(j){case ce.CONFIRMED:return"bg-green-100 text-green-800";case ce.CANCELLED:return"bg-red-100 text-red-800";case ce.COMPLETED:return"bg-blue-100 text-blue-800";case ce.REJECTED:return"bg-red-100 text-red-800";default:return"bg-yellow-100 text-yellow-800"}},F=c.filter(j=>g==="all"?!0:j.status===g);return d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h1",{className:"text-2xl font-bold",children:"Orders"}),d.jsx("div",{className:"flex gap-2",children:["all","pending","confirmed","completed"].map(j=>d.jsx("button",{onClick:()=>w(j),className:`px-4 py-2 rounded-lg ${g===j?"bg-primary-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:j.charAt(0).toUpperCase()+j.slice(1)},j))})]}),h&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",children:h}),l?d.jsx("div",{className:"flex justify-center py-8",children:d.jsx(tt,{})}):F.length===0?d.jsx("div",{className:"text-center py-8",children:d.jsx("p",{className:"text-gray-600",children:"No orders found"})}):d.jsx("div",{className:"space-y-4",children:F.map(j=>d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-lg",children:j.serviceName}),d.jsxs("p",{className:"text-gray-600",children:["Customer: ",j.userName]})]}),d.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${C(j.status)}`,children:j.status.charAt(0).toUpperCase()+j.status.slice(1)})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Date & Time"}),d.jsx("p",{className:"font-medium",children:gr(Ds(j.date),"PPp")})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Price"}),d.jsxs("p",{className:"font-medium",children:["$",j.price]})]})]}),j.status===ce.PENDING&&d.jsxs("div",{className:"flex gap-2",children:[d.jsx("button",{onClick:()=>E(j.id),className:"btn btn-primary flex-1",children:"Accept"}),d.jsx("button",{onClick:()=>k(j.id),className:"btn btn-secondary flex-1",children:"Reject"})]}),j.status===ce.CONFIRMED&&d.jsx("button",{onClick:()=>N(j.id),className:"btn btn-primary w-full",children:"Mark as Completed"})]},j.id))})]})})}function UR(){const{user:n,bookings:e,loadUserBookings:t,cancelBooking:r,isLoading:s}=Ie(),[i,o]=R.useState("all"),[c,l]=R.useState(null);R.useEffect(()=>{n&&t(n.id).catch(E=>{l(E instanceof Error?E.message:"Failed to load bookings")})},[n,t]);const h=()=>{const E=new Date;return e.filter(k=>{const N=Ds(k.date);switch(i){case"upcoming":return N>=E;case"past":return N<E;default:return!0}})},m=E=>{switch(E){case ce.CONFIRMED:return"bg-green-100 text-green-800";case ce.CANCELLED:return"bg-red-100 text-red-800";case ce.COMPLETED:return"bg-blue-100 text-blue-800";default:return"bg-yellow-100 text-yellow-800"}},g=async E=>{if(window.confirm("Are you sure you want to cancel this booking?"))try{await r(E)}catch(k){l(k instanceof Error?k.message:"Failed to cancel booking")}},w=h();return d.jsx("div",{className:"container mx-auto px-4 py-8",children:d.jsxs("div",{className:"max-w-3xl mx-auto",children:[d.jsxs("div",{className:"flex justify-between items-center mb-6",children:[d.jsx("h1",{className:"text-2xl font-bold",children:"My Bookings"}),d.jsx("div",{className:"flex gap-2",children:["all","upcoming","past"].map(E=>d.jsx("button",{onClick:()=>o(E),className:`px-4 py-2 rounded-lg ${i===E?"bg-primary-600 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"}`,children:E.charAt(0).toUpperCase()+E.slice(1)},E))})]}),c&&d.jsx("div",{className:"bg-red-50 text-red-600 p-4 rounded-lg mb-6",children:c}),s?d.jsx("div",{className:"flex justify-center py-8",children:d.jsx(tt,{})}):w.length===0?d.jsx("div",{className:"text-center py-8",children:d.jsx("p",{className:"text-gray-600",children:"No bookings found"})}):d.jsx("div",{className:"space-y-4",children:w.map(E=>d.jsxs("div",{className:"bg-white rounded-lg shadow-md p-6",children:[d.jsxs("div",{className:"flex justify-between items-start mb-4",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"font-semibold text-lg",children:E.serviceName}),d.jsx("p",{className:"text-gray-600",children:E.partnerName})]}),d.jsx("span",{className:`px-3 py-1 rounded-full text-sm font-medium ${m(E.status)}`,children:E.status.charAt(0).toUpperCase()+E.status.slice(1)})]}),d.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Date & Time"}),d.jsx("p",{className:"font-medium",children:gr(Ds(E.date),"PPp")})]}),d.jsxs("div",{children:[d.jsx("p",{className:"text-sm text-gray-600",children:"Price"}),d.jsxs("p",{className:"font-medium",children:["$",E.price]})]})]}),E.status===ce.CONFIRMED&&d.jsx("button",{onClick:()=>g(E.id),className:"text-red-600 hover:text-red-700 font-medium",children:"Cancel Booking"})]},E.id))})]})})}function BR(){return Ie(e=>e.isAuthenticated)?d.jsx(Bh,{}):d.jsx(Yg,{to:"/login",replace:!0})}function $R(){return d.jsxs(Qg,{children:[d.jsx(Te,{path:"/login",element:d.jsx(dS,{})}),d.jsx(Te,{path:"/register",element:d.jsx(IR,{})}),d.jsxs(Te,{element:d.jsx(nS,{}),children:[d.jsx(Te,{path:"/",element:d.jsx(iS,{})}),d.jsx(Te,{path:"/categories",element:d.jsx(AR,{})}),d.jsx(Te,{path:"/services/:categoryId",element:d.jsx(oS,{})}),d.jsx(Te,{path:"/service/:providerId",element:d.jsx(cS,{})}),d.jsx(Te,{path:"/contact",element:d.jsx(SR,{})}),d.jsx(Te,{path:"/about",element:d.jsx(RR,{})}),d.jsxs(Te,{element:d.jsx(BR,{}),children:[d.jsx(Te,{path:"/booking/:providerId/:serviceId",element:d.jsx(lS,{})}),d.jsx(Te,{path:"/booking/confirmation/:bookingId",element:d.jsx(uS,{})}),d.jsx(Te,{path:"/profile",element:d.jsx(xR,{})}),d.jsx(Te,{path:"/bookings",element:d.jsx(UR,{})}),d.jsx(Te,{path:"/favorites",element:d.jsx(NR,{})}),d.jsx(Te,{path:"/settings",element:d.jsx(PR,{})}),d.jsx(Te,{path:"/partner/register",element:d.jsx(CR,{})}),d.jsx(Te,{path:"/partner/dashboard",element:d.jsx(LR,{})}),d.jsx(Te,{path:"/partner/orders",element:d.jsx(FR,{})})]})]})]})}const qR=[{id:"1",email:"user@example.com",password:"Password123",name:"John Doe",phone:"+1234567890"},{id:"2",email:"admin@example.com",password:"Admin123",name:"Admin User",phone:"+1987654321"}];class Fh{static validateLoginInput(e,t){if(!Bc(e))throw new Error("Invalid email format");if(!$c(t))throw new Error("Invalid password format")}static validateRegisterInput(e){if(!Bc(e.email))throw new Error("Invalid email format");if(!$c(e.password))throw new Error("Invalid password format");if(qR.some(t=>t.email===e.email))throw new Error("Email already registered")}}const Wl=class Wl{static async getTokens(){try{const e=localStorage.getItem(this.TOKEN_KEY);return e?JSON.parse(e):null}catch{return null}}static async setTokens(e){localStorage.setItem(this.TOKEN_KEY,JSON.stringify(e))}static async removeTokens(){localStorage.removeItem(this.TOKEN_KEY)}};Wl.TOKEN_KEY="auth_tokens";let qc=Wl;class WR{constructor(){this.user=null}async init(){Pn.onAuthStateChanged(async e=>{if(e){const t=await pr.get("users",e.uid);this.user=t}else this.user=null})}async login(e,t){Fh.validateLoginInput(e,t);const r=await Pn.login(e,t),s=await pr.get("users",r.uid);if(!s)throw new Error("User data not found");return this.user=s,{user:s,tokens:{accessToken:await r.getIdToken(),refreshToken:r.refreshToken}}}async register(e){Fh.validateRegisterInput(e);const t=await Pn.register(e.email,e.password),r={id:t.uid,email:e.email,name:e.name,phone:e.phone};return await pr.create("users",r),this.user=r,{user:r,tokens:{accessToken:await t.getIdToken(),refreshToken:t.refreshToken}}}async logout(){await Pn.logout(),await qc.removeTokens(),this.user=null}getUser(){return this.user}isAuthenticated(){return!!this.user}}const zR=new WR;async function HR(){try{await zR.init()}catch(n){console.error("Failed to initialize app:",n)}rc.createRoot(document.getElementById("root")).render(d.jsx(Uh.StrictMode,{children:d.jsx(Jg,{children:d.jsx($R,{})})}))}HR();
//# sourceMappingURL=index-ColAek12.js.map
