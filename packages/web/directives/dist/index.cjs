"use strict";var m=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var S=(e,t)=>{for(var n in t)m(e,n,{get:t[n],enumerable:!0})},$=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of _(t))!B.call(e,i)&&i!==n&&m(e,i,{get:()=>t[i],enumerable:!(o=M(t,i))||o.enumerable});return e};var O=e=>$(m({},"__esModule",{value:!0}),e);var V={};S(V,{AllDirectives:()=>g,setupDirectives:()=>U});module.exports=O(V);var d=require("@celeris/utils"),w={mounted(e,t){e.copyData=t.value;let n=()=>{if(!e.copyData){d.logger.warn("There is no content to copy.");return}(0,d.copyToClipboard)(e.copyData)};e.addEventListener("click",n),e.__handleClick__=n},updated(e,t){e.copyData=t.value},beforeUnmount(e){e.removeEventListener("click",e.__handleClick__)}},x=w;var y=require("@celeris/utils"),v={event:"mousedown",transition:400,background:"rgba(0, 0, 0, 0.12)",zIndex:"9999"},I={beforeMount(e,t){if(t.value===!1)return;let n=H(t.modifiers),o=e.getAttribute("ripple-background")||n.background,i=s=>{z(s,e,o,n)};e.addEventListener(n.event,i)},updated(e,t){if(!t.value){N(e);return}let n=e.getAttribute("ripple-background");A(e,n)}};function H(e){let t={...v};return"event"in e&&(t.event=Object.keys(e).find(n=>n!=="event")||v.event),"transition"in e&&(t.transition=Number.parseInt(Object.keys(e).find(n=>n!=="transition")||String(v.transition))),t}function z(e,t,n,o){let{clientX:i,clientY:s}=e instanceof MouseEvent?e:e.touches[0],r=t.getBoundingClientRect(),{left:L,top:D,width:b,height:f}=r,c=i-L,l=s-D,h=Math.max(c,b-c),E=Math.max(l,f-l),p=Math.sqrt(h*h+E*E),T=Math.max(Number.parseInt(getComputedStyle(t).borderWidth.replace("px","")),0),k=o.zIndex,a=q(c,l,p,o.transition,n,k),u=j(b,f,T,getComputedStyle(t));u.appendChild(a),t.appendChild(u),setTimeout(()=>{a.style.width=`${p*2}px`,a.style.height=`${p*2}px`,a.style.marginLeft=`${c-p}px`,a.style.marginTop=`${l-p}px`},0),X(t,u,o.transition)}function N(e){let t=(0,y.querySelector)(".ripple-container",e);t&&(t.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{t.parentNode?.removeChild(t)},850))}function A(e,t){let n=(0,y.querySelector)(".ripple-container",e);n&&t&&(n.style.backgroundColor=t)}function q(e,t,n,o,i,s){let r=document.createElement("div");return r.className="ripple",r.style.marginTop=`${t}px`,r.style.marginLeft=`${e}px`,r.style.width="1px",r.style.height="1px",r.style.transition=`all ${o}ms cubic-bezier(0.61, 1, 0.88, 1)`,r.style.borderRadius="50%",r.style.pointerEvents="none",r.style.position="relative",r.style.zIndex=s,r.style.backgroundColor=i,r}function j(e,t,n,o){let i=document.createElement("div");return i.className="ripple-container",i.style.position="absolute",i.style.left=`${0-n}px`,i.style.top=`${0-n}px`,i.style.height="0",i.style.width="0",i.style.pointerEvents="none",i.style.overflow="hidden",i.style.width=`${e}px`,i.style.height=`${t}px`,i.style.direction="ltr",i.style.borderTopLeftRadius=o.borderTopLeftRadius,i.style.borderTopRightRadius=o.borderTopRightRadius,i.style.borderBottomLeftRadius=o.borderBottomLeftRadius,i.style.borderBottomRightRadius=o.borderBottomRightRadius,i}function X(e,t,n){let o=()=>{t.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{t?.parentNode?.removeChild(t)},n),e.removeEventListener("mouseup",o),e.removeEventListener("mouseleave",o),e.removeEventListener("dragstart",o),setTimeout(()=>{e.querySelector(".ripple-container")||(e.style.position=getComputedStyle(e).position!=="static"?getComputedStyle(e).position:"")},n+260)};e.addEventListener("mouseup",o),e.addEventListener("mouseleave",o),e.addEventListener("dragstart",o)}var R=I;var Y={mounted(e,t){e.addEventListener("click",()=>{let n=document.querySelector(t.value);n&&n.scrollIntoView({behavior:"smooth"})})}},C=Y;var g={copy:x,ripple:R,anchor:C};function U(e){Object.keys(g).forEach(t=>{e.directive(t,g[t])})}0&&(module.exports={AllDirectives,setupDirectives});
