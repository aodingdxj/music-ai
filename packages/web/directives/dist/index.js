import{copyToClipboard as T,logger as k}from"@celeris/utils";var M={mounted(e,t){e.copyData=t.value;let n=()=>{if(!e.copyData){k.warn("There is no content to copy.");return}T(e.copyData)};e.addEventListener("click",n),e.__handleClick__=n},updated(e,t){e.copyData=t.value},beforeUnmount(e){e.removeEventListener("click",e.__handleClick__)}},b=M;import{querySelector as f}from"@celeris/utils";var u={event:"mousedown",transition:400,background:"rgba(0, 0, 0, 0.12)",zIndex:"9999"},_={beforeMount(e,t){if(t.value===!1)return;let n=B(t.modifiers),o=e.getAttribute("ripple-background")||n.background,i=s=>{S(s,e,o,n)};e.addEventListener(n.event,i)},updated(e,t){if(!t.value){$(e);return}let n=e.getAttribute("ripple-background");O(e,n)}};function B(e){let t={...u};return"event"in e&&(t.event=Object.keys(e).find(n=>n!=="event")||u.event),"transition"in e&&(t.transition=Number.parseInt(Object.keys(e).find(n=>n!=="transition")||String(u.transition))),t}function S(e,t,n,o){let{clientX:i,clientY:s}=e instanceof MouseEvent?e:e.touches[0],r=t.getBoundingClientRect(),{left:R,top:C,width:m,height:v}=r,c=i-R,l=s-C,y=Math.max(c,m-c),g=Math.max(l,v-l),p=Math.sqrt(y*y+g*g),L=Math.max(Number.parseInt(getComputedStyle(t).borderWidth.replace("px","")),0),D=o.zIndex,a=w(c,l,p,o.transition,n,D),d=I(m,v,L,getComputedStyle(t));d.appendChild(a),t.appendChild(d),setTimeout(()=>{a.style.width=`${p*2}px`,a.style.height=`${p*2}px`,a.style.marginLeft=`${c-p}px`,a.style.marginTop=`${l-p}px`},0),H(t,d,o.transition)}function $(e){let t=f(".ripple-container",e);t&&(t.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{t.parentNode?.removeChild(t)},850))}function O(e,t){let n=f(".ripple-container",e);n&&t&&(n.style.backgroundColor=t)}function w(e,t,n,o,i,s){let r=document.createElement("div");return r.className="ripple",r.style.marginTop=`${t}px`,r.style.marginLeft=`${e}px`,r.style.width="1px",r.style.height="1px",r.style.transition=`all ${o}ms cubic-bezier(0.61, 1, 0.88, 1)`,r.style.borderRadius="50%",r.style.pointerEvents="none",r.style.position="relative",r.style.zIndex=s,r.style.backgroundColor=i,r}function I(e,t,n,o){let i=document.createElement("div");return i.className="ripple-container",i.style.position="absolute",i.style.left=`${0-n}px`,i.style.top=`${0-n}px`,i.style.height="0",i.style.width="0",i.style.pointerEvents="none",i.style.overflow="hidden",i.style.width=`${e}px`,i.style.height=`${t}px`,i.style.direction="ltr",i.style.borderTopLeftRadius=o.borderTopLeftRadius,i.style.borderTopRightRadius=o.borderTopRightRadius,i.style.borderBottomLeftRadius=o.borderBottomLeftRadius,i.style.borderBottomRightRadius=o.borderBottomRightRadius,i}function H(e,t,n){let o=()=>{t.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{t?.parentNode?.removeChild(t)},n),e.removeEventListener("mouseup",o),e.removeEventListener("mouseleave",o),e.removeEventListener("dragstart",o),setTimeout(()=>{e.querySelector(".ripple-container")||(e.style.position=getComputedStyle(e).position!=="static"?getComputedStyle(e).position:"")},n+260)};e.addEventListener("mouseup",o),e.addEventListener("mouseleave",o),e.addEventListener("dragstart",o)}var h=_;var z={mounted(e,t){e.addEventListener("click",()=>{let n=document.querySelector(t.value);n&&n.scrollIntoView({behavior:"smooth"})})}},E=z;var x={copy:b,ripple:h,anchor:E};function W(e){Object.keys(x).forEach(t=>{e.directive(t,x[t])})}export{x as AllDirectives,W as setupDirectives};